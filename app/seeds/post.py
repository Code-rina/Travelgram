from app.models import db, Post



def seed_posts():

  post1 = Post(user_id=1, image_url="https://media.cntraveler.com/photos/59cd14cb9465da68882fb4f4/16:9/w_2560%2Cc_limit/Debate_GettyImages-585587819.jpg", caption='What is on my bucket list? Everywhere. Lake Louise, Canada')
  post2 = Post(user_id=2, image_url="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2018_40/2229681/171116-better-stock-woman-traveling-airport-ew-624p.jpg", caption='Always open to new adventures')
  post3 = Post(user_id=3, image_url="https://images03.military.com/sites/default/files/styles/full/public/2021-07/stock-road-travel-1800.jpg", caption='Always say yes to new adventures. Mayrhofer, Austria')
  post4 = Post(user_id=4, image_url="https://www.planetware.com/photos-large/THA/phuket-day-trips-phi-phi-islands.jpg", caption='Keep calm and travel on. Phuket, Thailand ')
  post5 = Post(user_id=5, image_url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1257553494.jpg?crop=0.670xw:1.00xh;0.0481xw,0&resize=640:*", caption='It is alwasy a good time travelling through Italy! Positano, Italy')
  post6 = Post(user_id=6, image_url="https://i.pinimg.com/736x/93/7c/8f/937c8fbc2f5f60ebd987cc6dba73c441.jpg", caption='Bonjour. Paris, France')
  post7 = Post(user_id=7, image_url="https://i.pinimg.com/originals/94/c7/f6/94c7f6ec67c2ca2de332d81185f8c98a.jpg", caption='Good Morning! Prague, Czech Republic')
  post8 = Post(user_id=8, image_url="https://i.pinimg.com/originals/0a/6e/c5/0a6ec5f9667e0d98cc15e5f5a9b48df3.jpg", caption='This is such a captivating place. Kyoto, Japan')
  post9 = Post(user_id=1, image_url="https://i.pinimg.com/originals/94/62/86/946286e14bb6795c6baa1f33b4a066f9.jpg", caption='Definitely worth the visit. Singapore, Singapore')
  post10 = Post(user_id=2, image_url="https://imageio.forbes.com/specials-images/imageserve/61a11bdb7afd3d7797865eb5/8-Giraffes-Credit-Micato-Safaris/960x0.jpg?fit=bounds&format=jpg&width=960", caption='Must have been my favorite trip yet. Kenya, Africa')
  post11 = Post(user_id=3, image_url="https://i.pinimg.com/originals/d4/a8/18/d4a8187342cbf142a2af9ce53e8716f3.jpg", caption='Day 2 of our trip! Cape Town, South Africa')
  post12 = Post(user_id=4, image_url="https://i.pinimg.com/736x/e1/ec/d6/e1ecd6ba7680caa54513e5fa17c0c672.jpg", caption='My new routine: Journey. Explore. Discover. Repeat. Rio de Janeiro, Brazil')
  post13 = Post(user_id=5, image_url="https://i.pinimg.com/736x/6b/13/36/6b133622c75a24990f25b085287840a7.jpg", caption='Breakfast anyone? Rio de Janeiro, Brazil')
  post14 = Post(user_id=6, image_url="https://i.pinimg.com/originals/3f/ca/c4/3fcac4b7b35227224fc34bd318b4e446.jpg", caption='Only going places that spark joy. Incheon, South Korea')
  post15 = Post(user_id=7, image_url="https://i.pinimg.com/736x/aa/2e/53/aa2e53141faccbef1a9955489d537efb.jpg", caption='Astonishing Bukchon Hanok Village. Seoul, South Korea')
  post16 = Post(user_id=8, image_url="https://i.pinimg.com/564x/69/c8/6f/69c86fd81765be46113c311cd6d2434f.jpg", caption='We had such a great time here! Suzhou, China')
  post17 = Post(user_id=1, image_url="https://i.pinimg.com/736x/69/07/48/690748daa59128aeb5ed2024cca1f9e7.jpg", caption='When the light is just right. Shanhaiguan, China')
  post18 = Post(user_id=2, image_url="https://i.pinimg.com/736x/73/6e/f9/736ef9f4783f41153936b682d6815624.jpg", caption='Take memories, leave footprints. Taipei, Taiwan')
  post19 = Post(user_id=3, image_url="https://i.pinimg.com/originals/6a/76/45/6a76458705669eaaef3474e277397784.jpg", caption='Loving out time in Australia! Sydney, Australia')
  post20 = Post(user_id=4, image_url="https://i.pinimg.com/564x/80/6c/56/806c5625356b478425e6a1d0c6a6c4b1.jpg", caption='This was such a charming town! Guanajuato, Mexico')
  post21 = Post(user_id=5, image_url="https://i.pinimg.com/originals/3b/4a/98/3b4a98477fff2ed2b515851eb86f06cd.jpg", caption='It was such a cold day, but definitely worth the trip. Vik i Myrdal, Iceland')
  post22 = Post(user_id=6, image_url="https://i.pinimg.com/736x/16/22/5d/16225de2368d3e5dc2398d2cecdf942a.jpg", caption='The Medina Old town was incredible. Marrakech, Morocco')
  post23 = Post(user_id=7, image_url="https://i.pinimg.com/originals/3f/11/e4/3f11e4d339370b48be85abfabed51ab6.jpg", caption='This was the best vacay ever. Take me back! Papeete, Tahiti')
  post24 = Post(user_id=8, image_url="https://i.pinimg.com/736x/45/53/10/4553100ad3c4696313c1ddd5018185f0.jpg", caption='What a remarkable experiance this was, seeing the Northern Lights. Lappland, Finland ')
  post25 = Post(user_id=1, image_url="https://i.pinimg.com/originals/e7/15/74/e715742ba0ce00247ab0a3e64538fd8b.jpg", caption='Havana, Cuba')
  post26 = Post(user_id=2, image_url="https://i.pinimg.com/736x/3d/13/b3/3d13b3dc2dc9ff23e06d3827ac86d71b--boracay-philippines-the-philippines.jpg", caption='Take me back. Boracay, Phillippines')
  post27 = Post(user_id=3, image_url="https://64.media.tumblr.com/5a9cf87d0f144bbfb99629d072f9bcda/tumblr_oppzxf3cSl1u1m80xo1_1280.jpg", caption='California Dreaming. San Francisco, California')
  post28 = Post(user_id=4, image_url="https://images.unsplash.com/photo-1565081127922-ef42bf06f320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80", caption='Visited Sheikh Zayed Grand Mosque on the last day of our trp. Abu Dhabi, UAE')
  post29 = Post(user_id=5, image_url="https://i.pinimg.com/736x/fa/92/0b/fa920bc72f408b933913a91828c20c09.jpg", caption='Crawford Notch, New Hampshire')
  post30 = Post(user_id=6, image_url="https://i.pinimg.com/736x/04/5e/b7/045eb75f95e44d554a90eda3d609e57e.jpg", caption='Serengeti National Park, Tanzania')
  post31 = Post(user_id=7, image_url="https://i.pinimg.com/736x/bd/05/df/bd05df9c58ff10ad5ce2b39e16df9545--travel-alaska-alaska-usa.jpg", caption='I have found my happy place. Palmer, Alaska')
  post32 = Post(user_id=8, image_url="https://i.pinimg.com/736x/75/16/91/751691657e6849374df61df0f1a0b7dd--india-travel-incredible-india.jpg", caption='What a remarkable place to visit. Udalpur, India')
  post33 = Post(user_id=1, image_url="https://i.pinimg.com/736x/d9/78/c5/d978c581623ff8a31606966ebad887c0.jpg", caption='Sunset and rice fields. Sapa, Vietnam')
  post34 = Post(user_id=2, image_url="https://i.pinimg.com/736x/d9/85/e5/d985e53bf2433250147c0e01a816183b.jpg", caption='"Not all who wander are lost"-J.R.R.Tolkien. Buenos Aires, Argentina')
  post35 = Post(user_id=3, image_url="https://i.pinimg.com/564x/d6/0e/fe/d60efe43cb53bd6ad29344ff1ff27538.jpg", caption='I am so glad we decided to visit Arizona. Antelope Canyon, Arizona')
  post36 = Post(user_id=4, image_url="https://i.pinimg.com/originals/7b/de/2f/7bde2f3a4470b75ccf687ec7ed9dc8ac.jpg", caption='We had an unforgettable time in Spain. See you next time! Oviedo, Spain')
  post37 = Post(user_id=5, image_url="https://i.pinimg.com/736x/91/da/33/91da33425f7e073e85580e4129472bcd.jpg", caption='Stunning lush green fields. Who has been to Queenstown before? Queenstown, New Zealand')
  post38 = Post(user_id=6, image_url="https://i.pinimg.com/originals/a7/38/cd/a738cd4260fe522e87e8ae9a7c0b5143.jpg", caption='Tsingy De Bemaraha National Park, Madagascar')
  post39 = Post(user_id=7, image_url="https://i.pinimg.com/736x/13/b2/2c/13b22c33e741472863718b3dd05f59c7.jpg", caption='Getting lost in the streets of Christmas Wonderland. Oslo, Norway')
  post40 = Post(user_id=8, image_url="https://i.pinimg.com/736x/41/97/96/4197961293b808272f26d4ad7e7bf19c.jpg", caption='Enjoying the sunrise at Ulun Danu Bratan Temple. Bali, Indonesia')
  

  db.session.add(post1)
  db.session.add(post2)
  db.session.add(post3)
  db.session.add(post4)
  db.session.add(post5)
  db.session.add(post6)
  db.session.add(post7)
  db.session.add(post8)
  db.session.add(post9)
  db.session.add(post10)
  db.session.add(post11)
  db.session.add(post12)
  db.session.add(post13)
  db.session.add(post14)
  db.session.add(post15)
  db.session.add(post16)
  db.session.add(post17)
  db.session.add(post18)
  db.session.add(post19)
  db.session.add(post20)
  db.session.add(post21)
  db.session.add(post22)
  db.session.add(post23)
  db.session.add(post24)
  db.session.add(post25)
  db.session.add(post26)
  db.session.add(post27)
  db.session.add(post28)
  db.session.add(post29)
  db.session.add(post30)
  db.session.add(post31)
  db.session.add(post32)
  db.session.add(post33)
  db.session.add(post34)
  db.session.add(post35)
  db.session.add(post36)
  db.session.add(post37)
  db.session.add(post38)
  db.session.add(post39)
  db.session.add(post40)


  db.session.commit()


def undo_posts():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE moods RESTART IDENTITY CASCADE;')
  db.session.commit()