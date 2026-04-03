# blog-app
A modern full-stack blog application built using React, Node.js, Express, and MongoDB with authentication and CRUD operations.

# Features
-> User Authentication (Signup & Login) <br>
-> Create Blog Posts <br>
-> Edit Blog Posts <br>
-> Delete Blog Posts <br>
-> View All Posts <br>
-> MongoDB Database Integration <br>
-> JWT-based Authentication <br>
-> Responsive Dark UI <br>

# Tech Stack
Frontend <br>
-> React <br>
-> Tailwind CSS <br>
-> Fetch API <br>
Backend <br>
-> Node.js <br>
-> Express.js <br>
Database <br>
-> MongoDB (MongoDB Atlas) <br>
Authentication <br>
-> JWT (JSON Web Token) <br>
-> bcrypt (Password hashing) <br>

# Project Structure
blog-app/ <br>
│
├── blog-frontend/ <br>
│   ├── src/ <br>
│   │   └── App.js 
│   └── package.json <br>
│
├── blog-backend/ <br>
│   ├── app.js 
│   └── package.json <br>
│
└── README.md 

# Installation & Setup
1. Backend Setup <br>
npm install <br>
node app.js <br>

Server runs on: <br>

http://localhost:3000 <br>
2. Frontend Setup <br>
cd blog-frontend <br>
npm install <br>
npm start <br>

App runs on: <br>

http://localhost:3001 (or 3000 depending on config)

# API Endpoints
Authentication<br>

POST /signup → Create a new user account<br>
POST /login → Login user and receive JWT token<br>

Posts<br>

GET /posts → Fetch all blog posts<br>
POST /posts → Create a new post<br>
PUT /posts/:id → Update an existing post using its ID<br>
DELETE /posts/:id → Delete a post using its ID<br>

# Authentication Flow
User signs up with username & password
Password is hashed using bcrypt
User logs in → receives JWT token
Token stored in localStorage
Token used for protected API access

-> Login Page
-> Blog Dashboard
-> Add/Edit Post

# Author
Monisha
