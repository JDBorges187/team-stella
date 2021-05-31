from sqlalchemy.ext.hybrid import hybrid_property
from statistics import mean
from .db import db


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    image = db.Column(db.String(300), nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"))

    category = db.relationship("Category", back_populates="product")
    product_reviews = db.relationship("Review", back_populates="product")
    product_orders = db.relationship("OrderItem", backref="product", lazy=True)

    @hybrid_property
    def avg_rating(self):
        ratings = [r.rating for r in self.product_reviews]
        return mean(ratings) if len(ratings) else float(0)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "image": self.image,
            "categoryId": self.categoryId,
            "avgRating": self.avg_rating
        }
