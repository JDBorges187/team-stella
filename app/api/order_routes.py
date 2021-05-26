from flask import Blueprint, jsonify
from app.models import Order, OrderItem
from app import db

order_routes = Blueprint("orders", __name__)


@order_routes.route('/<id>')
def get_order_items(id):
    order_items = OrderItem.query.filter(OrderItem.orderId == id).all()
    order = Order.query.filter(Order.id == id).first()
    order_d = order.to_dict()
    return {
        "id": order_d["id"],
        "order_items": [order_item.to_dict() for order_item in order_items],
        "userId": order_d["userId"],
    }
