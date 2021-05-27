from flask import Blueprint, request
from app.models import Product, Review, db
from app.forms import ReviewForm
from flask_login import current_user

review_routes = Blueprint("reviews", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# /api/reviews


@review_routes.route('/')
def get_all_reviews():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews]}


@review_routes.route('', methods=['POST'])
def add_new_review():
    form = ReviewForm() #meta={'csrf': False})
    form['csrf_token'].data = request.cookies['csrf_token']
    if current_user.is_authenticated:
        userId = current_user.to_dict()
        print(userId)
        form['userId'].data = userId['id']
        if form.validate_on_submit():
            review = Review(
                userId=form.data['userId'],
                productId=form.data['productId'],
                rating=form.data['rating'],
                review=form.data['review']
            )
            db.session.add(review)
            db.session.commit()
            return review.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return {'errors': ['Unauthorized']}


@review_routes.route('/<id>')
def get_one_review(id):
    review = Review.query.get(id)
    return {"reviews": review.to_dict()}
