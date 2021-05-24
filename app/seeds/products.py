from app.models import db, Product

# Adds a demo user, you can add other users here if you want
def seed_products():

    test1 = Product(name='Car', price=2550.01,
                description='A car.', image='put url here')

    db.session.add(test1)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
