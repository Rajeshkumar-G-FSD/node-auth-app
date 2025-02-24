# User Authentication and Authorization System

This is a basic implementation of user authentication and authorization using Bearer tokens in a Node.js application with Express.js, Mongoose, and JWT. The application follows the MVC pattern and includes API documentation.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/user-auth-app.git
   cd user-auth-app
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/user-auth-app.git
   cd user-auth-app
Install dependencies:
bash

npm install
Create a .env file in the root directory and add the following environment variables:
env
 
PORT=3000
MONGO_URI=mongodb://localhost:27017/user-auth-app
JWT_SECRET=your_jwt_secret
Start the server:
bash
 
npm start
Environment Variables
PORT: The port number on which the server will run.
MONGO_URI: The MongoDB connection URI.
JWT_SECRET: The secret key used for JWT token signing.
API Endpoints
User Registration
Endpoint: POST /api/auth/register
Request Body:
JSON
 
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
Response:
JSON
 
{
  "message": "User registered successfully"
}
User Login
Endpoint: POST /api/auth/login
Request Body:
JSON
 
{
  "username": "testuser",
  "password": "password123"
}
Response:
JSON
 
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Protected Route
Endpoint: GET /api/protected
Authorization Header: Bearer <_jwt_token>
Response:
JSON
 
{
  "message": "You have access to this protected route"
}
Testing with Postman
Register a User:
Send a POST request to http://localhost:3000/api/auth/register with the JSON body.
Example:
JSON
 
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
Login:
Send a POST request to http://localhost:3000/api/auth/login with the JSON body.
The response will include a JWT token.
Access Protected Route:
Send a GET request to http://localhost:3000/api/protected with the Authorization header set to Bearer <your_jwt_token>.