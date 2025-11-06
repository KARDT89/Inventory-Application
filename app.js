import express from 'express'

const app = new express()
const PORT = 3000

app.use((req, res, next) => {
  console.log(`API Endpoint: ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.static('public'))
app.use(express.urlencoded())

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("Home.ejs")
})

app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
