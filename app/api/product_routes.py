from flask import Blueprint
from app.models import Product, Review

product_routes = Blueprint("products", __name__)

#/api/products
@product_routes.route('/')
def get_product_list():
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products] }

#/api/products/<id>
@product_routes.route('/<id>')
def get_product(id):
    product = Product.query.get(id)
    return {"product": product.to_dict()}

#/api/products/<id>/reviews
#id refers to productId
@product_routes.route('/<id>/reviews')
def get_product_reviews(id):
    reviews = Review.query.filter(Review.productId == id).all()
    # print(dir(reviews.product_reviews))
    return {"reviews": [review.to_dict() for review in reviews]}


@product_routes.route('/group/:<group>')
def get_product_group(group):
    productList = group.split(',')
    products = Product.query.filter(Product.id.in_(productList)).all()
    return {"products": [product.to_dict() for product in products]}
