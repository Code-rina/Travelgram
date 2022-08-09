from app.models import db, Comment



def seed_comments():   

  comment1 = Comment(user_id=1, post_id=1, comment='Wow! 🤩')
  comment2 = Comment(user_id=2, post_id=2, comment='I always wanted to visit!')
  comment3 = Comment(user_id=3, post_id=3, comment='Looks amazing 🔥')
  comment4 = Comment(user_id=4, post_id=4, comment='Love it! 💕')
  comment5 = Comment(user_id=5, post_id=5, comment='🙌')
  comment6 = Comment(user_id=6, post_id=6, comment='Adding onto my bucket list for sure.')
  comment7 = Comment(user_id=7, post_id=7, comment='Would love to go there!')
  comment8 = Comment(user_id=8, post_id=8, comment='What a dreamy place! 🤩')
  comment9 = Comment(user_id=1, post_id=9, comment='I am ready for new adventures too!🛫 ')
  comment10 = Comment(user_id=2, post_id=10, comment='Love your posts about traveling. Keep posting!')
  comment11 = Comment(user_id=3, post_id=10, comment='Love traveling! ')
  comment12 = Comment(user_id=4, post_id=11, comment='I cannot wait to visit this place as well.')
  comment13 = Comment(user_id=5, post_id=12, comment='I have always wanted to go there')
  comment14 = Comment(user_id=6, post_id=12, comment='I need to tell my friends about this place.')
  comment15 = Comment(user_id=7, post_id=13, comment='What a cool experience!')
  comment16 = Comment(user_id=8, post_id=14, comment='Great photo!')
  comment17 = Comment(user_id=1, post_id=16, comment='😍')
  comment18 = Comment(user_id=2, post_id=17, comment='Nice!!! My wife an I are going there next month.')
  comment19 = Comment(user_id=3, post_id=18, comment='We are going there with my friends soon!')
  comment20 = Comment(user_id=4, post_id=19, comment='OMG! It looks like a postcard.')
  comment21 = Comment(user_id=5, post_id=21, comment='Post more pictures from your trip')
  comment22 = Comment(user_id=6, post_id=23, comment='The lighting is incredible')
  comment23 = Comment(user_id=7, post_id=23, comment='What camera do you use? Amazing pictures')
  comment24 = Comment(user_id=8, post_id=24, comment='Nice photo')
  comment25 = Comment(user_id=1, post_id=25, comment='Great pic! 👍 ')
  comment26 = Comment(user_id=2, post_id=26, comment='Looks like a dream vacation.')
  comment27 = Comment(user_id=3, post_id=26, comment='I love this place!')
  comment28 = Comment(user_id=4, post_id=28, comment='How was the weather on your trip?')
  comment29 = Comment(user_id=5, post_id=29, comment='This is gorgeous')
  comment30 = Comment(user_id=6, post_id=30, comment='You should be a professional photographer! 📸 ')
  comment31 = Comment(user_id=7, post_id=32, comment='Looks like a painting.')
  comment32 = Comment(user_id=8, post_id=32, comment='Lovely photograph')
  comment33 = Comment(user_id=1, post_id=33, comment='This picture is such a high resolution!')
  comment34 = Comment(user_id=2, post_id=34, comment='I miss travelling')
  comment35 = Comment(user_id=3, post_id=36, comment='Cannot wait to go there this summer! 🤩 ')
  comment36 = Comment(user_id=4, post_id=36, comment='OMG, one of my favorite places')
  comment37 = Comment(user_id=5, post_id=36, comment='Where did you stay?')
  comment38 = Comment(user_id=6, post_id=38, comment='Love the colors')
  comment39 = Comment(user_id=7, post_id=39, comment='Your pics are always fantastic')
  comment40 = Comment(user_id=8, post_id=40, comment='Wish my travel photos turned out like yours!')
  
  

  db.session.add(comment1)
  db.session.add(comment2)
  db.session.add(comment3)
  db.session.add(comment4)
  db.session.add(comment5)
  db.session.add(comment6)
  db.session.add(comment7)
  db.session.add(comment8)
  db.session.add(comment9)
  db.session.add(comment10)
  db.session.add(comment11)
  db.session.add(comment12)
  db.session.add(comment13)
  db.session.add(comment14)
  db.session.add(comment15)
  db.session.add(comment16)
  db.session.add(comment17)
  db.session.add(comment18)
  db.session.add(comment19)
  db.session.add(comment20)
  db.session.add(comment21)
  db.session.add(comment22)
  db.session.add(comment23)
  db.session.add(comment24)
  db.session.add(comment25)
  db.session.add(comment26)
  db.session.add(comment27)
  db.session.add(comment28)
  db.session.add(comment29)
  db.session.add(comment30)
  db.session.add(comment31)
  db.session.add(comment32)
  db.session.add(comment33)
  db.session.add(comment34)
  db.session.add(comment35)
  db.session.add(comment36)
  db.session.add(comment37)
  db.session.add(comment38)
  db.session.add(comment39)
  db.session.add(comment40)


  db.session.commit()


def undo_comments():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
  db.session.commit()
