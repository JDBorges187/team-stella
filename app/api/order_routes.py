from flask import Blueprint, jsonify
from app.models import Order, OrderItem, User
from app import db

order_routes = Blueprint("orders", __name__)


@order_routes.route('/<id>')
def get_order_items(id):
    order = Order.query.filter(Order.id == id).first()
    order_d = order.to_dict()

    return order_d
