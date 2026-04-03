const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(cors());

/* ======================
   MongoDB Connection
====================== */
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

/* ======================
   Schemas & Models
====================== */

// Post Schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model("Post", postSchema);

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model("User", userSchema);

/* ======================
   🔐 AUTH MIDDLEWARE
====================== */
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.json({ message: "Access denied. No token." });
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
  } catch (err) {
    return res.json({ message: "Invalid token" });
  }
};

/* ======================
   Routes
====================== */

// Home
app.get("/", (req, res) => {
  res.send("Blog API running 🚀");
});

/* ===== AUTH APIs ===== */

// SIGNUP
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // 🔴 Check existing user
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password.trim(), 10);

  const newUser = new User({
    username,
    password: hashedPassword
  });

  await newUser.save();

  res.json({ message: "User created" });
});

// LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password.trim(), user.password);

  if (!isMatch) {
    return res.json({ message: "Wrong password" });
  }

  const token = jwt.sign({ id: user._id }, "secretkey");

  res.json({
    message: "Login successful",
    token
  });
});

/* ===== POSTS APIs ===== */

// GET all posts (public)
app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// ADD post (protected)
app.post("/posts", verifyToken, async (req, res) => {
  const { title, content } = req.body;

  const newPost = new Post({
    title,
    content
  });

  await newPost.save();

  res.json({
    message: "Post added",
    post: newPost
  });
});

// DELETE post (protected)
app.delete("/posts/:id", verifyToken, async (req, res) => {
  const id = req.params.id;

  await Post.findByIdAndDelete(id);

  res.json({
    message: "Post deleted"
  });
});

// UPDATE post (protected)
app.put("/posts/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  await Post.findByIdAndUpdate(id, { title, content });

  res.json({
    message: "Post updated"
  });
});

/* ======================
   Server
====================== */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});