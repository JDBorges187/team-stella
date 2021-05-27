from .db import db
import json
from datetime import datetime


class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)

    order_items = db.relationship("OrderItem", backref="order", lazy="joined")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "order_items": [order_item.to_dict() for order_item in self.order_items],
            "createdAt": self.createdAt,
        }
