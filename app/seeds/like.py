from app.models import db, Like



def seed_likes():   

  like1 = Like(user_id=1, post_id=1)
  like2 = Like(user_id=2, post_id=2)
  like3 = Like(user_id=3, post_id=3)
  like4 = Like(user_id=4, post_id=4)
  like5 = Like(user_id=5, post_id=5)
  like6 = Like(user_id=6, post_id=6)
  like7 = Like(user_id=7, post_id=7)
  like8 = Like(user_id=8, post_id=8)
  like9 = Like(user_id=1, post_id=9)
  like10 = Like(user_id=2, post_id=10)
  like11 = Like(user_id=3, post_id=10)
  like12 = Like(user_id=4, post_id=11)
  like13 = Like(user_id=5, post_id=12)
  like14 = Like(user_id=6, post_id=12)
  like15 = Like(user_id=7, post_id=13)
  like16 = Like(user_id=8, post_id=14)
  like17 = Like(user_id=1, post_id=16)
  like18 = Like(user_id=2, post_id=17)
  like19 = Like(user_id=3, post_id=18)
  like20 = Like(user_id=4, post_id=19)
  like21 = Like(user_id=5, post_id=21)
  like22 = Like(user_id=6, post_id=23)
  like23 = Like(user_id=7, post_id=23)
  like24 = Like(user_id=8, post_id=24)
  like25 = Like(user_id=1, post_id=25)
  like26 = Like(user_id=2, post_id=26)
  like27 = Like(user_id=3, post_id=26)
  like28 = Like(user_id=4, post_id=28)
  like29 = Like(user_id=5, post_id=29)
  like30 = Like(user_id=6, post_id=30)
  like31 = Like(user_id=7, post_id=32)
  like32 = Like(user_id=8, post_id=32)
  like33 = Like(user_id=1, post_id=33)
  like34 = Like(user_id=2, post_id=34)
  like35 = Like(user_id=3, post_id=36)
  like36 = Like(user_id=4, post_id=36)
  like37 = Like(user_id=5, post_id=36)
  like38 = Like(user_id=6, post_id=38)
  like39 = Like(user_id=7, post_id=39)
  like40 = Like(user_id=8, post_id=40)
  
  

  db.session.add(like1)
  db.session.add(like2)
  db.session.add(like3)
  db.session.add(like4)
  db.session.add(like5)
  db.session.add(like6)
  db.session.add(like7)
  db.session.add(like8)
  db.session.add(like9)
  db.session.add(like10)
  db.session.add(like11)
  db.session.add(like12)
  db.session.add(like13)
  db.session.add(like14)
  db.session.add(like15)
  db.session.add(like16)
  db.session.add(like17)
  db.session.add(like18)
  db.session.add(like19)
  db.session.add(like20)
  db.session.add(like21)
  db.session.add(like22)
  db.session.add(like23)
  db.session.add(like24)
  db.session.add(like25)
  db.session.add(like26)
  db.session.add(like27)
  db.session.add(like28)
  db.session.add(like29)
  db.session.add(like30)
  db.session.add(like31)
  db.session.add(like32)
  db.session.add(like33)
  db.session.add(like34)
  db.session.add(like35)
  db.session.add(like36)
  db.session.add(like37)
  db.session.add(like38)
  db.session.add(like39)
  db.session.add(like40)


  db.session.commit()


def undo_likes():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
  db.session.commit()