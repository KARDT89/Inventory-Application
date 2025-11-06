import { Pool } from 'pg'

const pool = new Pool({
    connectionString: 'postgresql://dt89:pg123@localhost:5432/inventory-top',
})

export default pool
