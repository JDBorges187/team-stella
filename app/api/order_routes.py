from flask import Blueprint, jsonify, request
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
    orders_dic = {}
    for order in [order.to_dict() for order in orders]:
        orders_dic[order['id']] = order

    return orders_dic


@order_routes.route('', methods=['POST'])
def post_order():
    userId = current_user.get_id()
    print("USER IDENTITY ====>", userId)
    order = Order(
        userId=1,
    )

    db.session.add(order)
    db.session.commit()

    data = request.json

    for itemId, quantity in data.items():
        order_item = OrderItem(
            orderId=order.id,
            productId=itemId,
            quantity=quantity,
        )
        db.session.add(order_item)
    db.session.commit()

    return order.to_dict()
