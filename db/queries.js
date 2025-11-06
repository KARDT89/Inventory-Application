import pool from './pool.js'

async function getAllUsernames() {
    const { rows } = await pool.query('SELECT * FROM usernames')
    return rows
}

async function getAllVideos() {
    const { rows } = await pool.query('SELECT * FROM videos')
    return rows
}

async function getAllCategories() {
    const { rows } = await pool.query('SELECT * FROM categories')
    return rows
}

async function insertUsername(username) {
    await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username])
}

export default {
    getAllUsernames,
    getAllVideos,
    insertUsername,
    getAllCategories,
}
