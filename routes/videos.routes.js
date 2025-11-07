import { Router } from 'express'
import {
    getAllVideos,
    createVideoGet,
    createVideoPost,
    getAVideo
} from '../controllers/videos.controller.js'

const videosRouter = new Router()

videosRouter.get('/', getAllVideos)
videosRouter.get('/add', createVideoGet)
videosRouter.post('/add', createVideoPost)
videosRouter.get('/:id', getAVideo)
// videosRouter.patch('/edit/:id', editVideo)
// videosRouter.delete('/delete/:id', deleteVideo)

export default videosRouter
