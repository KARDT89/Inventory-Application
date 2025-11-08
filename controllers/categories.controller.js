import db from "../db/queries.js"

export async function getCategories(req, res){
    const data = await db.getAllCategories()
    console.log(data);
    
    res.render('categories/categoryPage.ejs', { categories: data })
}