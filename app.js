import express from 'express'
// import categoriesRouter from './routes/categories.routes.js';
// import userRouter from './routes/user.routes.js';
import videosRouter from './routes/videos.routes.js'

const app = new express()
const PORT = 3000

app.use((req, res, next) => {
    console.log(`API Endpoint: ${req.method} ${req.originalUrl}`)
    next()
})

app.use(express.static('public'))
app.use(express.urlencoded())

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/videos', videosRouter)

app.get('/', (req, res) => {
    res.redirect('/videos')
})

app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
