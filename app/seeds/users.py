from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(firstname='Demo', email='demo@aa.io',
                password='password', lastname='lition')
    jesse = User(firstname='JesseComeBack', email='jesse@aa.io',
                password='password', lastname='Wong')
    juice = User(firstname='Juice', email='juice@aa.io',
                password='password', lastname='The Dog')
    brad = User(firstname='Bradington', email='brad@aa.io',
                password='password', lastname='The Third')
    mitch = User(firstname='SpeedReisser', email='mitch@aa.io',
                password='password', lastname='Mitch')
    juliet = User(firstname='RomeosJuliet', email='juliet@aa.io',
                password='password', lastname='Juliet')
    zach = User(firstname='Zachawatts', email='zach@aa.io',
                password='password', lastname='Zach')
    jeff = User(firstname='Grandalf', email='jeff@aa.io',
                password='password', lastname='Jeff')
    
    

    db.session.add(demo)
    db.session.add(jesse)
    db.session.add(juice)
    db.session.add(brad)
    db.session.add(mitch)
    db.session.add(juliet)
    db.session.add(zach)
    db.session.add(jeff)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
