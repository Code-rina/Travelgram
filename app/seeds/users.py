from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', fullname='Demo User', email='demo@a.a.io', profile_img='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png', password='password')
    kate = User(
        username='KateHarris', fullname='Kate Harris', email='kateharris@outlook.com', profile_img='https://i.pinimg.com/736x/ce/94/0e/ce940e6b255a5fb80562b67925ef015a--baby-dachshund-dachshunds.jpg', password='password')
    justin = User(
        username='JZK', fullname='Justin Kreibich', email='justin@email.com', profile_img='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/library/wp-content/uploads/2015/03/adjust-tie.jpeg', password='password')
    anna = User(
        username='annie', fullname='Anna Johnson', email='annaj@gmail.com', profile_img='https://i.pinimg.com/originals/df/ab/99/dfab9961c596d5b0ecfebde85381419a.jpg', password='password')
    ella = User(
        username='EllieMayStone', fullname='Ella Stone', email='elliemay@aol.com', profile_img='https://qph.fs.quoracdn.net/main-qimg-3d526e5a6d0c2ec3ba9749ff68fef27b-lq', password='password')
    david = User(
        username='Dave007', fullname='David Willis', email='david@yahoo.com', profile_img='https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlkZGVuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80', password='password')
    sam = User(
        username='SamSmith', fullname='Sam Smith', email='sam.smith@gmail.com', profile_img='https://media.istockphoto.com/photos/couple-in-love-walking-down-a-cute-historical-street-picture-id1314731122?b=1&k=20&m=1314731122&s=170667a&w=0&h=9rmpOaAgrLW6tRbVPDe4ttl-RCq8DX3QDw_T6Hr-agg=', password='password')
    jennifer = User(
        username='IamJenny', fullname='Jennifer Simpson', email='jsimpson@email.com', profile_img='https://www.followmeaway.com/wp-content/uploads/2019/02/how-to-pose-in-travel-photos-for-Instagram-burney-falls.jpg', password='password')
    
    db.session.add(demo)
    db.session.add(kate)
    db.session.add(justin)
    db.session.add(anna)
    db.session.add(ella)
    db.session.add(david)
    db.session.add(sam)
    db.session.add(jennifer)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
