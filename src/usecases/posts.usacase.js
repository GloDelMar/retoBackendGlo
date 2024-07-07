const createError = require("http-errors")
const Posts = require("../models/posts.model")


async function createPost (PostsData){
    const sameTitle =  await Posts.findOne({
        title: PostsData.title
    })
    if (sameTitle){
        throw createError(409, "Title already used")
    }
    
   
    const newPost = await Posts.create(PostsData)
    return newPost
}
async function getAll(search) {
    let query = {};

    if (search && search.trim() !== '') {
        query = { title: { $regex: search, $options: 'i' } };
    }

    const posts = await Posts.find(query);
    return posts; 
}

async function getAll(search) {
    let query = {};

    if (search && search.trim() !== '') {
        query = { title: { $regex: search, $options: 'i' } };
    }

    const posts = await Posts.find(query);
    return posts; // Asegúrate de que siempre devuelva un array
}


async function upDateById(id, postsData){

    if ('user' in postsData) {
        throw new Error('User field cannot be updated');
    }
    const updatedPost = await Posts.findByIdAndUpdate(id, postsData,{new: true})

    return updatedPost
}

async function deleteById(userId, postId){
    
    const post = await Posts.findById(postId)

    if (!post) {
        throw createError(404, "Post not found")
    }

  
    if (post.userId !== userId) {
        throw createError(403, "Unauthorized: You are not the owner of this post")
    }


    await Posts.findByIdAndDelete(postId)

    return post
}


module.exports = {
    createPost,
    getAll,
    upDateById,
    deleteById
}