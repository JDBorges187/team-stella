from app.models import db, Product, Category

# Adds a demo user, you can add other users here if you want
def seed_products():

    category1 = Category(name="Vehicle")
    product1 = Product(name='Car', price=2550.01,
                description='A car.', image='put url here',
                categoryId=1)

    category2 = Category(name="Hat")
    product2 = Product(name='Racing Cap', price=85.99,
                description='A cap.', image='put url here',
                categoryId=2)

    product3 = Product(name='Sun Visor', price=55.99,
                description='A visor.', image='put url here',
                categoryId=2)

    db.session.add(category1)
    db.session.add(product1)

    db.session.add(category2)
    db.session.add(product2)
    db.session.add(product3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
