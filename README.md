# blog-app
A modern full-stack blog application built using React, Node.js, Express, and MongoDB with authentication and CRUD operations.

# Features
-> User Authentication (Signup & Login)
-> Create Blog Posts
-> Edit Blog Posts
-> Delete Blog Posts
-> View All Posts
-> MongoDB Database Integration
-> JWT-based Authentication
-> Responsive Dark UI

# Tech Stack
Frontend
-> React
-> Tailwind CSS
-> Fetch API
Backend
-> Node.js
-> Express.js
Database
-> MongoDB (MongoDB Atlas)
Authentication
-> JWT (JSON Web Token)
-> bcrypt (Password hashing)

# Project Structure
blog-app/ <br>
│
├── blog-frontend/ <br>
│   ├── src/ <br>
│   │   └── App.js <br>
│   └── package.json <br>
│
├── blog-backend/ <br>
│   ├── app.js <br>
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
1 Authentication
Method	Endpoint	Description
POST	/signup	Create new user
POST	/login	Login user
2 Posts
Method	Endpoint	Description
GET	/posts	Get all posts
POST	/posts	Create post
PUT	/posts/:id	Update post
DELETE	/posts/:id	Delete post
3 Authentication Flow
User signs up with username & password
Password is hashed using bcrypt
User logs in → receives JWT token
Token stored in localStorage
Token used for protected API access
📸 Screenshots

Add screenshots here for better presentation

Login Page
Blog Dashboard
Add/Edit Post

# Author
Monisha
