"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Countries
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import json

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


# @api.route('/hello', methods=['POST'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def handle_signup():
    body = json.loads(request.data)
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
        
    new_user = User(
        email = body['email'],
        name = body['name'],
        password = body['password'],
        countries = countries,
    )

    db.session.add(new_user)
    db.session.commit()
    return jsonify({'msg': 'User created succesfully'}), 200

