from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    countries_id = db.Column(db.Integer, db.ForeignKey("countries.id"))
    countries = db.relationship("Countries", backref= db.backref("user"))



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

    def __repr__(self):
        return f'<Countries {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,

        }

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.String(300), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    categories = db.Column(db.String(50))
    tags = db.Column(db.String(50))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User", backref= db.backref("posts"))



    def __repr__(self):
        return f'<Posts {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "img": self.img,
            "comment": self.comment,
            "date": self.date.strftime('%Y-%m-%d %H:%M:%S'),
            "categories": self.categories,
            "tags": self.tags,
            "user": self.user.serialize()
        }

