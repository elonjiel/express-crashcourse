
import express from "express";
import { 
    createPost, 
    deletePost, 
    getPost, 
    getPosts, 
    updatePost 
} from "../controllers/postController.js"
// const express = require("express");
const router = express.Router();





// Get All posts
router.get('/', getPosts);

// Get single post
router.get('/:id', getPost);

// Create new post
router.post("/", createPost);

// Update Post

router.put("/:id", updatePost);

// Delete Post

router.delete("/:id", deletePost);

export default router;
