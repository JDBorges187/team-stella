from app.models import db, Product, Category

# Adds a demo user, you can add other users here if you want


def seed_products():

    category1 = Category(name="Vehicle")
    product1 = Product(name='Car', price=549.00,
                       description='A car.', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622497064/stella/ARA109011_A0_VP96UUS0_nxwfrz.jpg',
                       categoryId=1)

    category2 = Category(name="Hat")
    product2 = Product(name='Jaguar Racing Cap', price=45.99,
                       description='A cap.', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496023/stella/racing-cap_fczpsp.jpg',
                       categoryId=2)

    product3 = Product(name='Sun Visor', price=55.99,
                       description='A visor.', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496062/stella/sun-visor_pxcits.jpg',
                       categoryId=2)
    product4 = Product(name='Red Bull Hat', price=19.99,
                       description='A cap.', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496028/stella/red-bull-hat_yw5yty.jpg',
                       categoryId=2)

    product5 = Product(name='Sombrero', price=50.99,
                       description='A visor.', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496056/stella/sombrero_lgozym.jpg',
                       categoryId=2)
    category3 = Category(name="Shirt")
    product6 = Product(name='Red Bull shirt', price=48.99,
                       description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496033/stella/red-bull-shirt_s2fkkv.jpg',
                       categoryId=3)

    product7 = Product(name='SClassic Racing Shirt', price=34.99,
                       description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496038/stella/sclassic-racing-shirt_kiqlgo.jpg',
                       categoryId=3)
    product8 = Product(name='Monster Shirt', price=24.99,
                       description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496011/stella/monster-shirt_dwr36u.jpg',
                       categoryId=3)

    product9 = Product(name='Team Yamaha Shirt', price=56.99,
                       description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496191/stella/teamMonsterShirt_quqkly.jpg',
                       categoryId=3)
    product10 = Product(name='Fox Racing Shirt', price=27.99,
                        description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622495993/stella/fox-racing-shirt_qcwlau.jpg',
                        categoryId=3)

    product11 = Product(name='Honda Shirt', price=16.99,
                        description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622495997/stella/honda-shirt_vozwsw.jpg',
                        categoryId=3)
    product12 = Product(name='Kawasaki Shirt', price=14.99,
                        description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496005/stella/kawasaki-shirt_cqslvg.jpg',
                        categoryId=3)

    product13 = Product(name='Suzuki Shirt', price=15.99,
                        description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496065/stella/suzuki-shirt_jqllif.jpg',
                        categoryId=3)

    product14 = Product(name='MotoGP Shirt', price=29.99,
                        description='Racing shirt', image='https://res.cloudinary.com/dpf7crjn5/image/upload/v1622496017/stella/motogp-shirt_uznbel.jpg',
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
