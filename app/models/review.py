from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    productId = db.Column(db.Integer, db.ForeignKey(
        "products.id"), nullable=False)
    rating = db.Column(db.Integer)
    review = db.Column(db.String(200), nullable=False)

    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="product_reviews")

    @property
    def user_id(self):
        return self.userId

    @property
    def product_id(self):
        return self.productId

    def to_dict(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "review": self.review,
            "user": self.user.to_dict()
        }
