
# Book Management API

This is a simple book management API built using Node.js. It provides CRUD operations for managing book entries, user authentication, and filtering books by author or publication year.


Table of Contents
Endpoints
Authentication
Security Measures
Usage
Dependencies
Setup


## Table of Contents

#####  Endpoints
##### Authentication
##### Security Measures
##### Usage
##### Dependencies
##### Setup
## Endpoints

## User Registration
POST http://localhost:3000/auth/register
Register a new user. Requires a request body containing name, email, and password.

## User Login
POST http://localhost:3000/auth/login
Login with existing user credentials. Requires a request body containing email and password

## Book Management
POST http://localhost:3000/books
Create a new book entry. Requires authentication.

GET http://localhost:3000/books
Get all books. Requires authentication.

PUT http://localhost:3000/books/:id
Update a book entry. Requires authentication.


DELETE http://localhost:3000/books/:id
Delete a book entry. Requires authentication.


GET http://localhost:3000/books/author/:author
Filter books by author. Requires authentication.

GET http://localhost:3000/books/year/:year
Filter books by year. Requires authentication.

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. When a user registers or logs in, a JWT token is generated and returned. This token must be included in the "Authorization" header of subsequent requests to authenticate the user.

## Example:

Authorization: Bearer <token>

## Security Measures

#### Input validation is implemented using Joi for user registration and login endpoints to ensure that user input is validated before processing.
#### Passwords are securely hashed using bcrypt before storing them in the database to prevent unauthorized access to user accounts.
#### JWT tokens are signed with a secret key and have a short expiration time to reduce the risk of token misuse.
## Usage

Clone the repository: git clone https://github.com/Rsangram007/Book-API.git

Install dependencies:

cd book-management-api

npm install


Set up environment variables:

PORT=3000
MONGO_URL=your_mongodb_uri
JWT_SECRET=bookapi

Start the server:npm start


## Dependencies
#### bcryptjs
#### dotenv
#### express
#### jsonwebtoken
#### mongoose
#### joi
## Setup

#### Install Node.js and MongoDB on your system if you haven't already.
#### Clone this repository.
#### Install dependencies using npm install.
#### Set up environment variables in a .env file.
#### Start the server with npm start.