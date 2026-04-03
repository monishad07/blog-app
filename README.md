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
blog-app/
│
├── blog-frontend/
│   ├── src/
│   │   └── App.js
│   └── package.json
│
├── blog-backend/
│   ├── app.js
│   └── package.json
│
└── README.md

# Installation & Setup
1️⃣ Clone Repository
git clone <your-repo-link>
cd blog-app
2️⃣ Backend Setup
cd blog-backend
npm install
node app.js

Server runs on:

http://localhost:3000
3️⃣ Frontend Setup
cd blog-frontend
npm install
npm start

App runs on:

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
