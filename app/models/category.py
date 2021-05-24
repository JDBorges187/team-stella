from .db import db

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(40), nullable = False)

    product = db.relationship("Product", back_populates="category")
