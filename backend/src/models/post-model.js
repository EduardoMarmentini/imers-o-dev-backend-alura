import connectingDB from "../config/dbConfig.js";

const connection = await connectingDB(process.env.CONNECTION_STRING);

export default async function getAllPosts() {
  const db = connection.db("imersao-instabytes");

  const collection = db.collection("posts"); // Corrected typo

  return collection.find().toArray();
}