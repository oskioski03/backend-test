import {Pool} from 'pg'

console.log('DB_USER ', process.env.DB_USER)
console.log('DB_PASSWORD ', process.env.DB_PASSWORD)
console.log('DB_NAME ', process.env.DB_NAME)

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'postgres',
  port: 5432,
  database: process.env.DB_NAME
});



// export async function runMigrations() {
//   try {
//     await pool.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(100),
//         email VARCHAR(100)
//       )
//     `);

//     // Sprawdź czy tabela jest pusta
//     const result = await pool.query('SELECT COUNT(*) FROM users');
//     if (result.rows[0].count === '0') {
//       // Dodaj przykładowe dane
//       await pool.query(`
//         INSERT INTO users (name, email) VALUES
//         ('John Doe', 'john@example.com'),
//         ('Jane Smith', 'jane@example.com')
//       `);
//     }

//     console.log('Migrations completed successfully');
//   } catch (err) {
//     console.error('Error running migrations:', err);
//     throw err;
//   }
// }