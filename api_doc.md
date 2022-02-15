# Hacktiv Legends API Documentation

### Deployed server
- https://rome-fox-livecode2-1st.herokuapp.com/
- https://rome-fox-livecode2-2nd.herokuapp.com/
- https://rome-fox-livecode2-3rd.herokuapp.com/

Silahkan lakukan register user dengan email yg belum terdaftar

&nbsp;

## Models :

_User_
```
- email : string, required, unique
- password : string, required
```

_Hero_
```
- name : string, required
- type : string, required
- imageUrl : string, required
```

_Favourite_
```
- heroId : integer, required​
- userId : integer, required
- role : string, (default: "-")
- power : integer, (default: 0)
```

## Relationship :

>### **Many-to-Many**
Perhatikan relasi antara `User`, `MyHero`, dan `Hero` gunakan definisi relasi yang sesuai pada sequelize relation [doc](https://sequelize.org/master/manual/advanced-many-to-many.html).

## Endpoints :

List of available endpoints:
​
- `POST /register`
- `POST /login`

Routes below need authentication:

- `GET /heroes`
- `GET /favourites`
- `POST /favourites/:id`

Routes below need authentication & authorization:

- `PUT /favourites/:id`

&nbsp;

## 1. POST /register

Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_
```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_
```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /heroes

Description:
- Fetch all heroes from database

Request:

- headers: 
```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_
```json
[
  {
    "id": 1,
    "name": "Paquito",
    "type": "Fighter",
    "imageUrl": "https://img.mobilelegends.com/group1/M00/00/B2/Cq2IxmAKtDOAe9QQAAIoQFvuZwA933.jpg"
  },
  {
    "id": 2,
    "name": "Barats",
    "type": "Tank",
    "imageUrl": "https://img.mobilelegends.com/group1/M00/00/AB/Cq2Ixl-_iUCAQOs3AALNya38dwM674.jpg"
  },
  {
    "id": 3,
    "name": "Yu Zhong",
    "type": "Fighter",
    "imageUrl": "https://img.mobilelegends.com/group1/M00/00/A8/Cq2Ixl8MDzOAYTdJAAGJKaZhxlA426.jpg"
  },
  ...,
]
```

&nbsp;

## 4. POST /favourites/:heroId

Description:
- Add new favourite hero

Request:

- headers:
```json
{
  "access_token": "string"
}
```

- params:
```json
{
  "heroId": "integer"
}
```

_Response (201 - Created)_
```json
{
  "id": 1,
  "userId": 1,
  "heroId": 1,
  "role": "",
  "power": 0
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Hero not found"
}
```

&nbsp;

## 5. GET /favourites

Description:
- Get current user favourites

Request:

- headers:
```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_
```json
[
  {
    "id": 1,
    "userId": 1,
    "heroId": 1,
    "role": "",
    "power": 0,
    "hero": {
      "id": 1,
      "name": "Paquito",
      "type": "Fighter",
      "imageUrl": "https://img.mobilelegends.com/group1/M00/00/B2/Cq2IxmAKtDOAe9QQAAIoQFvuZwA933.jpg"
    }
  },
  ...,
]
```

&nbsp;

## 6. PUT /favourites/:id

Description:
- Update favourite hero

Request:

- headers:
```json
{
  "access_token": "string"
}
```

- params:
```json
{
  "id": "integer"
}
```

- body:
```json
{
  "role": "string",
  "power": "integer"
}
```

_Response (200 - OK)_
```json
{
  "message": "Hero has been updated"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Hero not found"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_
```json
{
  "message": "You are not authorized"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal server error"
}
```