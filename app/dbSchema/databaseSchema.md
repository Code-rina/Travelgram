Table users {
  id int [pk]
  username varchar(50)
  fullname varchar
  email varchar
  profileImg varchar
  hashedPassword varchar
  createdAt timestamp
  updatedAt timestamp
}


Table posts {
  id int [pk]
  userId int
  imageUrl varchar
  caption text
  createdAt timestamp
  updatedAt timestamp
}

Ref: posts.userId > users.id

Table comments {
  id int [pk]
  userId int
  postId int
  comment text
  createdAt timestamp
  updatedAt timestamp
}

Ref: comments.userId > users.id
Ref: comments.postId > posts.id

Table likes {
  id int [pk]
  userId int
  postId int
  createdAt timestamp
  updatedAt timestamp
}
Ref: likes.userId > users.id
Ref: likes.postId > posts.id

Table followers {
  id int [pk]
  userId int
  followerId int
  createdAt timestamp
  updatedAt timestamp
}
Ref: followers.userId > users.id 
Ref: followers.followerId > users.id

