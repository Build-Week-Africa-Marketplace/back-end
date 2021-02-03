# back-end

# back-end url

https://build-week-africa-marketplace.herokuapp.com/

# Endpoints

| Method | Endpoint                     | Description                                                                                                                                                                 |
| ------ | ---------------------------- | -------------------------------------------------------------------------------------------|
| POST   | /register                    |  Creates new users. Req.body: {username: "", password: "", location: "", owner: bool}      |
| POST   | /login                       |  Login user. Req.body: {username: "", password: ""}                                        |
| GET    | /users                       |  Gets all users.                                                                           |
| GET    | /users/:id                   |  Gets user by id.                                                                          |
| GET    | /user/:id/items              |  Gets user items by user id.                                                               |
| POST   | /user/:id/items              |  Adds user item.                                                                           |
| GET    | /user/:id/items/:item_id     |  Gets user item by user id and item id.                                                    |
| DELETE | /user/:id/items/:item_id     |  Deletes user item by user id and item id.                                                 |

GET all users: /users
  res: [
    {
      "id": 1,
      "username": "Ash",
      "password": "$2a$10$XJG/IuU3heziRDVt82MuSuIx/IspMLMiUFK0wtFnOjqFdOaGWpNyK",
      "location": "Pallet Town",
      "owner": 1
    },
    {
      "id": 2,
      "username": "Brock",
      "password": "$2a$10$4sf8dkAEWJrox2q3nU5axuhTQQ31y3EfseBsmkrzduIhC9bZlGqsi",
      "location": "Pewter City",
      "owner": 1
    },
    {
      "id": 3,
      "username": "Misty",
      "password": "$2a$10$BfRstjEtyP.kEzr7xxQ2pep73Gkgge0SYw3pNWJ1c/dn6g2nuL1FK",
      "location": "Cerulean City,",
      "owner": 1
    }]

GET user by id: /users/:id
  res:
    {
      "id": 1,
      "username": "Ash",
      "password": "$2a$10$9ePZoyobbfmFF4ZEFFklPO5nGfUAQBDREMQ1SoNsfsGoJHW3Yof3m",
      "location": "Pallet Town",
      "owner": 1
    }


