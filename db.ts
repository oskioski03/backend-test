import {Pool} from 'pg'

export const pool = new Pool({
  user: 'smart',
  password: 'admin',
  host: 'postgres',
  port: 5432,
  database: 'backend_test_smart'
});

