#### https://bu-cse-backend-anichu-anichus-projects.vercel.app/

### https://bu-cse-backend-anichu-anichus-projects.vercel.app/users/:userId [GET] for getting user

```
{
    "success": true,
    "data": {
        "_id": "664dae302859afd74d41ff4c",
        "firstName": "Md",
        "lastName": "Tarikul",
        "phone": "1221-456-7890",
        "email": "tarikul.cse5.bu@gmail.com",
        "department": "Engineering",
        "rollNumber": "E12345",
        "registrationNumber": "R932",
        "gender": "Male",
        "bloodGroup": "A+",
        "password": "$2a$10$.BA1GN1suXYVq.1w4Zz3NO/OLeC7LzfNDIGVRP6ZHBLApgpHS0xJC",
        "createdAt": "2024-05-09T10:10:27.919Z",
        "updatedAt": "2024-05-09T10:10:27.919Z",
        "__v": 0
    },
    "message": "Get All users"
}
```

### https://bu-cse-backend-anichu-anichus-projects.vercel.app/users/:userId [DELETE] for deleting user

```
{
    "success": true,
    "data": {
        "_id": "664dafa9b14cdacc57168760",
        "firstName": "anis",
        "lastName": "molla",
        "phone": "123-456-7890",
        "email": "anis.cs5.bu@gmail.com",
        "department": "Engineering",
        "rollNumber": "E12345",
        "registrationNumber": "R98765",
        "gender": "Male",
        "bloodGroup": "A+",
        "password": "$2a$10$0TixknY2SD/Bx4RC3L/W3eOK/lY10x1afutJssxTCaXz/8seUzh1O",
        "createdAt": "2024-05-22T08:41:14.004Z",
        "updatedAt": "2024-05-22T08:41:14.004Z",
        "__v": 0
    },
    "message": "User deleted successfully"
}
```

### https://bu-cse-backend-anichu-anichus-projects.vercel.app/register [POST] for registration

```
{
  "firstName": "anis",
  "lastName": "molla",
  "phone": "123-456-7890",
  "email": "anis.cse5.bu@gmail.com",
  "department": "Engineering",
  "rollNumber": "E12345",
  "registrationNumber": "R98765",
  "gender": "Male",
  "bloodGroup": "A+",
  "password":"1234"
}

```


### https://bu-cse-backend-anichu-anichus-projects.vercel.app/users [Get] for getting all users
```

{
    "success": true,
    "data": [
        {
            "_id": "663c9ffe1b47888fedf233ba",
            "firstName": "anis",
            "lastName": "molla",
            "phone": "123-456-7890",
            "email": "anis.cse5.bu@gmail.com",
            "department": "Engineering",
            "rollNumber": "E12345",
            "registrationNumber": "R98765",
            "gender": "Male",
            "bloodGroup": "A+",
            "__v": 0,
            "password": "$2a$10$e64d3LT9TUzyMBFwWaPjLeioxwmw1JLOfEij1AlEek/yCAVSj.HdC",
            "updatedAt": "2024-05-09T10:15:24.392Z"
        },
        {
            "_id": "663ca1133b239d6527cc5147",
            "firstName": "John",
            "lastName": "Doe",
            "phone": "123-456-7890",
            "email": "johnde@example.com",
            "department": "Engineering",
            "rollNumber": "E12345",
            "registrationNumber": "R98765",
            "gender": "Male",
            "bloodGroup": "A+",
            "password": "$2a$10$.BA1GN1suXYVq.1w4Zz3NO/OLeC7LzfNDIGVRP6ZHBLApgpHS0xJC",
            "createdAt": "2024-05-09T10:10:27.919Z",
            "updatedAt": "2024-05-09T10:10:27.919Z",
            "__v": 0
        },
        {
            "_id": "6645526991c415f2ebaf24c5",
            "email": "john.doe2@example.com",
            "password": "$2a$10$BzgUYkcPZUH8Oi/WzJnYnOHew2hUkXx8G4ML3fKXr/EZ3txdzu5vu",
            "createdAt": "2024-05-16T00:25:13.674Z",
            "updatedAt": "2024-05-16T00:25:13.674Z",
            "__v": 0
        }
    ],
    "message": "Get All users"
}
```


### https://bu-cse-backend-anichu-anichus-projects.vercel.app/login [POST] for authentication

```

{

  "email": "anis.cse5.bu@gmail.com",
  "password":"1234"
}

```

### https://bu-cse-backend-anichu-anichus-projects.vercel.app/users/:userId [PUT] for updating user

```
  "lastName": "molla",
  "phone": "123-456-7890",
  "email": "anis.cse5.bu@gmail.com",
  "department": "Engineering

```
