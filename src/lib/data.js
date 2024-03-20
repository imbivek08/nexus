import { Post, User } from "./models"
import { connectToDB } from "./utils"

export const getPosts  = async() =>{
    try{
        connectToDB()
        const posts = await Post.find()
        return posts
    }catch(err){
        console.log(err)
        throw new Error("Failed to get the post")
    }
}

export const getPost = async (slug) =>{
    try{
        connectToDB()
        const post = await Post.findOne({slug:slug})
        return post
    }catch(err){
        console.log(err)
        throw new Error("Failed to get the post")
    }
}

export const getUser = async (id) =>{
    try{
        connectToDB()
        const user = await User.findById(id)
        return user
    }catch(err){
        console.log(err)
        throw new Error("Failed to get the post")
    }
}

export const getUsers = async() =>{
    try{
        connectToDB()
        const users = await Post.find()
        return users
    }catch(err){
        console.log(err)
        throw new Error("Failed to get the post")
    }
}