# back-end

# back-end url

https://build-week-africa-marketplace.herokuapp.com/

# Endpoints

| Post register: | /register | #2 | |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Seconds | 301 | 283 | 290 | 286 | 289 | 285 | 287 | 287 | 272 | 276 | 269 | 254 |

POST register: /register
  req.body: {username: "", password: "", location: "", owner: bool}
  res: {id: number, username: "", password: "", location: "", owner: bool}

POST login: /login
  req.body: {username: "", password: ""}
  res: {message: `Welcome, ${username}`, token: ""}

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

GET all user_items: /user_items

GET user_items by user id: /users/user_items

POST user_items 


