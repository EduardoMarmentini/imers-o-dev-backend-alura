import {getAllPosts, cr} from "../models/post-model.js";
import fs from "fs";

export async function listPosts(req, res){

    const posts = await getAllPosts();
    
    res.status(200).json(posts);
}

export async function newPost(req, res) {
    
    const newPost = req.body;

    try
    {
        const postCreate = await createPost(newPost);
        res.status(200).json(postCreate);
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json(
            {"Erro" : "Falha na requisição"}
        );
    }
};

export async function uploadImage(req, res) {
    
    const newPost = {
        descript : "",
        img_url  : req.file.originalname,
        alt      : ""
        
    }

    try
    {
        const postCreate = await createPost(newPost);
        const imageUpdated = `uploads/${postCreate.insertedId}.png`;
        fs.renameSync(req.file.path, imageUpdated);
        
        res.status(200).json(postCreate);
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json(
            {"Erro" : "Falha na requisição"}
        );
    }
};