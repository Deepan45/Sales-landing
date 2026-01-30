import express from 'express';
import {
  getBlogPosts,
  getBlogPostBySlug,
  createBlogPost
} from '../controllers/blogController.js';

const router = express.Router();

// Public routes
router.get('/', getBlogPosts);
router.get('/:slug', getBlogPostBySlug);

// Admin routes (should add authentication middleware in production)
router.post('/', createBlogPost);

export default router;
