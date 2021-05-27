from flask import Blueprint
from app.models import Product

category_routes = Blueprint("categories", __name__)


@category_routes.route('/<id>')
def get_product_from_category(id):
    products = Product.query.filter(Product.categoryId == id)
    return {"products": [product.to_dict() for product in products]}
