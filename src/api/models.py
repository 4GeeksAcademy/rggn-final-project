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
