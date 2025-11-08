import db from "../db/queries.js"

export async function getCategories(req, res){
    const data = await db.getAllCategories()
    console.log(data);
    
    res.render('categories/categoryPage.ejs', { categories: data })
}

export async function createCategoryPost(req, res) {
    const { category } = req.body  
    try {
        await db.addCategory(category)
    } catch (error) {
        console.log(error);
    }
    res.redirect('/categories')
}

export async function deleteCategory(req, res) {
    const id = req.params.id
    try {
        await db.deleteCategory(id)
    } catch (error) {
        console.log(error);
    }
    res.redirect('/categories')
}