import connectingDB from "../config/dbConfig.js";

const connection = await connectingDB(process.env.CONNECTION_STRING);

export default async function getAllPosts() {
  const db = connection.db("imersao-instabytes");

  const collection = db.collection("posts");

  return collection.find().toArray();
}

export default async function createPost(newPost) {
  const db = connection.db("imersao-instabytes");

  const collection = db.collection("posts");

  return collection.insertOne(newPost);
}