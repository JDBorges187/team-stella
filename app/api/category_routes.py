from flask import Blueprint
from app.models import Category, Product

category_routes = Blueprint("categories", __name__)

@category_routes.route('/<name>')
def get_product_from_category(name):
    products = Product.query.filter(Category.name == name).all()
    return {"products": [product.to_dict() for product in products]}
