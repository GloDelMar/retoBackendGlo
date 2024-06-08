const createError = require("http-errors")
const Posts = require("../models/posts.model")


async function createPost (PostsData){
    const sameTitle =  await Posts.findOne({
        title: PostsData.title
    })
    if (sameTitle){
        throw createError(409, "Title already used")
    }
    
    return Posts.create

}

async function getAll(search) {
    if (search && search.trim() !== '') {
        return await Posts.find({ title: { $regex: search, $options: 'i' } });
    }        
        return await Posts.find();
    
}

async function upDateById(id, postsData){
    const updatedPost = await Posts.findByIdAndUpdate(id, postsData,{new: true})

    return updatedPost
}

async function deleteById(id){
    const deletedPost = await Posts.findByIdAndDelete(id)
    return deletedPost
    
}


module.exports = {
    createPost,
    getAll,
    upDateById,
    deleteById
}