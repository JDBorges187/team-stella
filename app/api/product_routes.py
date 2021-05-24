from flask import Blueprint
from app.models import Product

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
@product_routes.route('/<id>/reviews')
def get_product_reviews(id):
    # reviews = Product.query.get(id)
    pass
