import pool from '../config/database.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Run database migrations automatically
 * This creates all necessary tables if they don't exist
 */
export async function runMigrations() {
  console.log('🔄 Running database migrations...');
  
  try {
    // Read the schema file
    const schemaPath = path.join(__dirname, '../database/schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    
    // Split SQL statements by semicolon and filter out comments and empty lines
    const statements = schemaSql
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    // Execute each statement
    for (const statement of statements) {
      if (statement.trim()) {
        await pool.query(statement);
      }
    }
    
    console.log('✅ Database migrations completed successfully');
    return true;
  } catch (error) {
    console.error('❌ Error running migrations:', error.message);
    throw error;
  }
}

/**
 * Check if database tables exist
 */
export async function checkTablesExist() {
  try {
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('contacts', 'blog_posts', 'subscribers')
    `);
    
    return result.rows.length === 3;
  } catch (error) {
    console.error('Error checking tables:', error);
    return false;
  }
}

/**
 * Initialize database - run migrations if tables don't exist
 */
export async function initializeDatabase() {
  console.log('🔍 Checking database status...');
  
  try {
    const tablesExist = await checkTablesExist();
    
    if (!tablesExist) {
      console.log('📋 Tables not found. Creating database schema...');
      await runMigrations();
    } else {
      console.log('✅ Database tables already exist');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
}

// Export for use in other modules
export default {
  runMigrations,
  checkTablesExist,
  initializeDatabase
};
