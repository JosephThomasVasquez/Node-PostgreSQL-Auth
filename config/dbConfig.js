import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const Pool = pg.Pool;

// Check if the app is in production mode
const isProduction = process.env.NODE_ENV === "production";

// Get PostgreSQL Database URL
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
});

export default pool;
