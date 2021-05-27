from flask import Blueprint, jsonify
from app.models import Order, OrderItem, User
from app import db
from flask_login import current_user

order_routes = Blueprint("orders", __name__)


@order_routes.route('/<id>')
def get_order_items(id):
    order = Order.query.filter(Order.id == id).first()
    order_d = order.to_dict()

    return order_d


@order_routes.route('')
def get_all_orders():
    userId = current_user.get_id()
    orders = Order.query.filter(Order.userId == userId).all()
    orders_lst = [order.to_dict() for order in orders]
    orders_dic = {}
    for order in orders_lst:
        orders_dic[order['id']] = order

    return orders_dic
