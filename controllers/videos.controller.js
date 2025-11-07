import db from '../db/queries.js'
import { convertToEmbed } from '../utils/convertYTLinks.js'
import { videoId } from '../utils/getYoutubeVideoId.js'

export async function getAllVideos(req, res) {
    const videos = await db.getAllVideos()
    const updatedVideos = videos.map((vid) => ({
        ...vid,
        video_link: convertToEmbed(vid.video_link),
        videoId: videoId(vid.video_link),
    }))
    console.log(updatedVideos)

    res.render('Home.ejs', { videos: updatedVideos })
}

export async function createVideoGet(req, res) {
    const categories = await db.getAllCategories()
    res.render('videos/addVideoForm.ejs', { categories: categories })
}

export async function createVideoPost(req, res) {
    const { title, description, link, category } = req.body
    await db.addVideo(title, description, link, category)
    res.redirect('/videos')
}

export async function getAVideo(req, res) {
    const { id } = req.params
    const data = await db.getAVideo(id)
    
    let updatedData;
    if (data[0].video_link.includes("twitch")){
        updatedData = data.map((vid) => ({
            ...vid,
            videoId: videoId(vid.video_link),
        }))
    } else {
        updatedData = data.map((vid) => ({
            ...vid,
            video_link: convertToEmbed(vid.video_link),
            videoId: videoId(vid.video_link),
        }))
    }
    console.log(data);
    
    console.log(updatedData);
    
    res.render('videos/videoDetails.ejs', {data: updatedData})
    
}
