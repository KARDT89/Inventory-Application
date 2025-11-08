import { Router } from 'express'
import {
    getAllVideos,
    createVideoGet,
    createVideoPost,
    getAVideo,
    editVideoGet,
    editVideoPost
} from '../controllers/videos.controller.js'

const videosRouter = new Router()

videosRouter.get('/', getAllVideos)
videosRouter.get('/add', createVideoGet)
videosRouter.post('/add', createVideoPost)
videosRouter.post('/edit/:id', editVideoPost)
videosRouter.get('/edit/:id', editVideoGet)
videosRouter.get('/:id', getAVideo)
// videosRouter.delete('/delete/:id', deleteVideo)

export default videosRouter
