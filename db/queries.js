import pool from './pool.js'

async function getAllUsernames() {
    const { rows } = await pool.query('SELECT * FROM usernames')
    return rows
}

async function getAllVideos() {
    const { rows } = await pool.query('SELECT * FROM videos')
    return rows
}

async function addVideo(title, description, video_link, category_id) {
    await pool.query(
        'INSERT INTO videos (title, description, video_link, category_id) VALUES ($1, $2, $3, $4)',
        [title, description, video_link, category_id]
    )
}

async function getAllCategories() {
    const { rows } = await pool.query('SELECT * FROM categories')
    return rows
}

async function addCategory(category_name) {
    await pool.query('INSERT INTO categories (category_name) VALUES ($1)', [
        category_name,
    ])
}

async function getAVideo(id) {
    const { rows } = await pool.query('SELECT * FROM videos WHERE id = ($1)', [
        id,
    ])
    return rows
}

async function insertUsername(username) {
    await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username])
}

async function deleteCategory(id) {
    await pool.query('DELETE FROM categories WHERE id = ($1)', [id])
}

async function getCategoryById(id) {
    const { rows } = await pool.query(
        'SELECT * FROM categories WHERE id = ($1)',
        [id]
    )

    return rows
}

async function editCategoryById(id, category_name) {
    await pool.query(
        `UPDATE categories
         SET category_name = $2
         WHERE id = $1`,
        [id, category_name]
    )
}

async function editAVideo(id, title, description, video_link, category_id) {
    await pool.query(
        `UPDATE videos
         SET title = $1,
             description = $2,
             video_link = $3,
             category_id = $4
         WHERE id = $5`,
        [title, description, video_link, category_id, id]
    )
}

export default {
    getAllUsernames,
    getAllVideos,
    insertUsername,
    getAllCategories,
    addVideo,
    getAVideo,
    addCategory,
    deleteCategory,
    editAVideo,
    editCategoryById,
    getCategoryById,
}
