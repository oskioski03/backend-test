import {Pool} from 'pg'

export const pool = new Pool({
  user: 'anon',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'backend_test_anon'
});

