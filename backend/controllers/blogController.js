import pool from '../config/database.js';

// Get all blog posts (published only for public)
export const getBlogPosts = async (req, res) => {
  try {
    const { published = 'true', limit = 10, offset = 0 } = req.query;
    
    const result = await pool.query(
      'SELECT id, title, slug, excerpt, author, created_at, updated_at FROM blog_posts WHERE published = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3',
      [published === 'true', limit, offset]
    );

    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog posts',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Get single blog post by slug
export const getBlogPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const result = await pool.query(
      'SELECT * FROM blog_posts WHERE slug = $1 AND published = true',
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog post',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Create blog post (admin endpoint)
export const createBlogPost = async (req, res) => {
  try {
    const { title, slug, excerpt, content, author, published } = req.body;

    const result = await pool.query(
      'INSERT INTO blog_posts (title, slug, excerpt, content, author, published) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, slug, excerpt, content, author, published || false]
    );

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create blog post',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
