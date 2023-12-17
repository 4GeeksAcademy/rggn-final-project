from flask_sqlalchemy import SQLAlchemy
from datetime import date

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(180), unique=False, nullable=False)
    salt = db.Column(db.String(80), unique=False, nullable=False)
    countries_id = db.Column(db.Integer, db.ForeignKey("countries.id"))
    
    posts = db.relationship("Posts", backref= db.backref("user"))



    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            # Si self.countries.name existe lo muestra, si no None, en caso de que no haya nada en la base de datos
            "countries": self.countries.name if self.countries else None
 
        }
    
class Countries(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    users = db.relationship("User", backref= db.backref("countries"))
    posts = db.relationship("Posts", backref= db.backref("countries"))

    def __repr__(self):
        return f'<Countries {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,

        }


class Categories(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    # post_category = db.relationship("Post_Category", backref= db.backref("categories"))
    
    def __repr__(self):
        return f'<Categories {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,

        }

# class Tags(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), nullable=False)
#     post_tag = db.relationship("Post_Tag", backref="tags")

#     def __repr__(self):
#         return f'<Tags {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,

#         }

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.String(400), nullable=True)
    title = db.Column(db.String(150), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    # date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # post_category = db.Column(db.Integer, db.ForeignKey("categories.id"))   OJO
    # post_category = db.relationship("Post_Category", backref= db.backref("posts"))
    # post_tag = db.relationship("Post_Tag", backref="posts", uselist=True)
    countries_id = db.Column(db.Integer, db.ForeignKey("countries.id"))



    def __repr__(self):
        return f'<Posts {self.title}>'

    def serialize(self):
        # categories = Categories.query.filter_by(id = self.id).all()
        # serialized_categories = list(map(lambda x: x.serialize(), categories))

        # tags = Post_Tag.query.filter_by(post_id = self.id).all()
        # serialized_tags = list(map(lambda x: x.serialize(), tags))
        return {
            "id": self.id,
            "img": self.img,
            "title": self.title,
            "comment": self.comment,
            # "date": self.date.strftime('%Y-%m-%d %H:%M:%S'),
            # "categories": serialized_categories, OJO
            # "tags": serialized_tags,
            "user_id": self.user_id,
            "countries_id": self.countries_id
        }
    
# class Post_Category(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
#     post_id = db.Column(db.Integer, db.ForeignKey("posts.id"))
    



#     def __repr__(self):
#         return f'<Post_Category {self.id}>'

#     def serialize(self):
#         category = Categories.query.get(self.category_id)
#         return {
#             "id": self.id,
#             "category": category.serialize()["name"],
#             "post_id": self.post_id,
 
#         }

# class Post_Tag(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     tag_id = db.Column(db.Integer, db.ForeignKey("tags.id"))
#     post_id = db.Column(db.Integer, db.ForeignKey("posts.id"))
    



#     def __repr__(self):
#         return f'<Post_Tag {self.id}>'

#     def serialize(self):
#         tag = Tags.query.get(self.tag_id)
#         return {
#             "id": self.id,
#             "tag": tag.serialize()["name"],
#             "post_id": self.post_id,
 
#         }


    # def tags_serialize(self):
    #     result = Tags.query.filter_by(id = self.tags_id).first()
    #     return {"tags": result.serialize()}