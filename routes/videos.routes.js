import { Router } from 'express'
import {
    getAllVideos,
    createVideoGet,
    createVideoPost
} from '../controllers/videos.controller.js'

const videosRouter = new Router()

videosRouter.get('/', getAllVideos)
// videosRouter.get('/:id', getVideo)
videosRouter.get('/add', createVideoGet)
videosRouter.post('/add', createVideoPost)
// videosRouter.patch('/edit/:id', editVideo)
// videosRouter.delete('/delete/:id', deleteVideo)

export default videosRouter
