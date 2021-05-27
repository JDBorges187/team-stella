from app.models import db, Product, Category

# Adds a demo user, you can add other users here if you want


def seed_products():

    category1 = Category(name="Vehicle")
    product1 = Product(name='Car', price=2550.01,
                       description='A car.', image='/images/car-1.jpg',
                       categoryId=1)

    category2 = Category(name="Hat")
    product2 = Product(name='Racing Cap', price=85.99,
                       description='A cap.', image='put url here',
                       categoryId=2)

    product3 = Product(name='Sun Visor', price=55.99,
                       description='A visor.', image='put url here',
                       categoryId=2)
    product4 = Product(name='Red Bull Hat', price=19.99,
                       description='A cap.', image='put url here',
                       categoryId=2)

    product5 = Product(name='Sombrero', price=50.99,
                       description='A visor.', image='put url here',
                       categoryId=2)
    category3 = Category(name="Shirt")
    product6 = Product(name='Red Bull shirt', price=34.99,
                       description='Racing shirt', image='put url here',
                       categoryId=3)

    product7 = Product(name='SClassic Racing Shirt', price=34.99,
                       description='Racing shirt', image='put url here',
                       categoryId=3)
    product8 = Product(name='Monster Shirt', price=24.99,
                       description='Racing shirt', image='put url here',
                       categoryId=3)

    product9 = Product(name='Team Yamaha Shirt', price=56.99,
                       description='Racing shirt', image='put url here',
                       categoryId=3)
    product10 = Product(name='Fox Racing Shirt', price=17.99,
                        description='Racing shirt', image='put url here',
                        categoryId=3)

    product11 = Product(name='Honda Shirt', price=13.99,
                        description='Racing shirt', image='put url here',
                        categoryId=3)
    product12 = Product(name='Kawasaki Shirt', price=9.99,
                        description='Racing shirt', image='put url here',
                        categoryId=3)

    product13 = Product(name='Suzuki Shirt', price=10.99,
                        description='Racing shirt', image='put url here',
                        categoryId=3)

    product14 = Product(name='MotoGP Shirt', price=13.99,
                        description='Racing shirt', image='put url here',
                        categoryId=3)

    db.session.add(category1)
    db.session.add(product1)

    db.session.add(category2)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)

    db.session.add(category3)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
