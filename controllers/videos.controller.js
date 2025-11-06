import db from '../db/queries.js'
import { convertToEmbed } from '../utils/convertYTLinks.js'

export async function getAllVideos(req, res) {
    const videos = await db.getAllVideos()
    videos.map(vid => {
       vid.video_link = convertToEmbed(vid.video_link)
    })
    
    res.render('Home.ejs', { videos: videos })
}

export async function createVideoGet(req, res) {
    const categories = await db.getAllCategories()
    res.render('videos/addVideoForm.ejs', { categories: categories })
}

export async function createVideoPost(req, res) {
    const {title, description, link, category} = req.body
    await db.addVideo(title, description, link, category)
    res.redirect("/videos")
    
}
