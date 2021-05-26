from flask import Blueprint
from app.models import Product, Review

review_routes = Blueprint("reviews", __name__)

#/api/reviews
@review_routes.route('/')
def get_all_reviews():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews] }

@review_routes.route('/<id>')
def get_one_review(id):
    review = Review.query.get(id)
    return {"reviews": review.to_dict()}
