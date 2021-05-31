from app.models import db, Product, Review, User
from random import randint

def seed_reviews():

    #Users who we will add reviews for:
    # jesse = User.query.filter(User.email == 'jesse@aa.io').first()
    # juice = User.query.filter(User.email == 'juice@aa.io').first()
    # brad = User.query.filter(User.email == 'brad@aa.io').first()
    # mitch = User.query.filter(User.email == 'mitch@aa.io').first()
    # juliet = User.query.filter(User.email == 'juliet@aa.io').first()
    # zach = User.query.filter(User.email == 'zach@aa.io').first()
    # jeff = User.query.filter(User.email == 'jeff@aa.io').first()

    users= User.query.all()
    user_ids = [user.id for user in users]

    products = Product.query.all()
    product_ids = [product.id for product in products]

    for product_id in product_ids:
        db.session.add(Review(
            userId=user_ids[product_id%len(user_ids)],
            productId=product_id,
            rating=5,
            review="It was awesome!"
        ))
        db.session.add(Review(
            userId=user_ids[(product_id+1)%len(user_ids)],
            # userId=(product_id+1)%len(user_ids),
            productId=product_id,
            rating=5,
            review="Could'nt be happier!"
        ))
        db.session.add(Review(
            userId=user_ids[(product_id+2)%len(user_ids)],
            # userId=(product_id+2)%len(user_ids),
            productId=product_id,
            rating=5,
            review="Take my money!"
        ))
    db.session.commit()


    

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()


