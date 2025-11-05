import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log('usernames will be logged here - wip')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
