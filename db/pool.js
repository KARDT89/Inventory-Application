import { Pool } from 'pg'
import { configDotenv } from 'dotenv'

configDotenv()

const pool = new Pool({
    // connectionString: 'postgresql://dt89:pg123@localhost:5432/dtube',
    connectionString: process.env.DATABASE_URL,
})

export default pool
