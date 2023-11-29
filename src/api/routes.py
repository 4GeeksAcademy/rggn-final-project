"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Countries, Posts, Tags
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from base64 import b64encode
import os
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#salt
def set_password(password, salt):
    return generate_password_hash(f"{password}{salt}")
#hash
def check_password(hash_password, password, salt):
    return check_password_hash(hash_password, f"{password}{salt}")

# @api.route('/hello', methods=['POST'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200
@api.route('/login', methods=['POST'])
def handle_login():
    body = request.json
    email = body.get("email")
    password = body.get("password")

    if email is None or password is None:
        return jsonify({"message":"You need email and password"}), 400
    else: 
        user = User.query.filter_by(email = email).one_or_none()
        if user is None:
            return jsonify({"message":"bad credentials"}), 400
        else:
            if check_password(user.password, password, user.salt):
                token = create_access_token(
                    identity = {
                        "user_id":user.id,
                    }
                )
                return jsonify({"token":token}), 200
            else:
                return jsonify({"message":"bad credentials"}), 400
@api.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    if len(users) < 1:
        return jsonify({"msg": "not found"}), 404
    serialized_users = list(map(lambda x: x.serialize(), users))
    return serialized_users, 200

@api.route('/signup', methods=['POST'])
def handle_signup():
    body = request.json
    password = body.get('password')
    # Verificar si el correo electronico ya existe
    exist_user = User.query.filter_by(email = body['email']).first()
    if exist_user: 
        return jsonify({'error': 'email already exists'}), 400
    
    # Verificar si el país se proporciona en el cuerpo de la solicitud
    countries_name = body.get("countries")

    # Buscar el país en la base de datos o crear uno nuevo si no existe
    if countries_name:
        countries = Countries.query.filter_by(name=countries_name).first()
        if not countries:
            countries = Countries(name=countries_name)
            db.session.add(countries)
            db.session.commit()
    else:
        # Manejar el caso donde no se proporciona el país
        countries = None

    salt = b64encode(os.urandom(32)).decode("utf-8")
    password = set_password(password, salt)
        
    new_user = User(
        email = body['email'],
        name = body['name'],
        password = password,
        salt = salt,
        countries = countries,
    )

    db.session.add(new_user)
    db.session.commit()
    return jsonify({'msg': 'User created succesfully'}), 200

@api.route('/posts', methods=['GET'])
def get_all_posts():
    posts = Posts.query.all()
    if len(posts) < 1:
        return jsonify({"msg": "not found"}), 404
    serialized_posts = list(map(lambda x: x.serialize(), posts))
    return jsonify (serialized_posts), 200 
    # posts = db.session.query(Posts, Tags).join(Tags).all()
    # result = list(map(lambda post:{
    #     "idPost": post[0].id,
    #     "idTag": post[1].id,

    # }))
    # return jsonify(result), 200