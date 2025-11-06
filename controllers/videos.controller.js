import db from '../db/queries.js'

export async function getAllVideos(req, res) {
    const videos = await db.getAllVideos()
    console.log(videos)

    res.render('Home.ejs', { videos: videos })
}

export async function createVideoGet(req, res) {
    const categories = await db.getAllCategories()
    res.render('videos/addVideoForm.ejs', { categories: categories })
}
