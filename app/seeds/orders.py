from app.models import db, Order, OrderItem

# Adds a demo user, you can add other users here if you want
def seed_orders():

    testOrder = Order(userId=1)
    orderItem1 = OrderItem(orderId=1, productId=1, quantity=2)
    orderItem2 = OrderItem(orderId=1, productId=4, quantity=2)

    db.session.add(testOrder)
    db.session.add(orderItem1)
    db.session.add(orderItem2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE order_items RESTART IDENTITY CASCADE;')
    db.session.commit()
