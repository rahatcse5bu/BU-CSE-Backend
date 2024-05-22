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
