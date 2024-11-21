import express from "express"

function findPost(postID){
    return posts.findIndex((post) => {
        return post.id === Number(postID);
    });
};

const posts = [
    {
      id: 1,
      descript: "Um gatinho fofo tomando sol na janela.",
      image: "https://placecats.com/millie/300/150",
    },
    {
      id: 2,
      descript: "Gato curioso explorando uma caixa de papelão.",
      image: "https://placecats.com/millie/300/150",
    },
    {
      id: 3,
      descript: "Um felino elegante se espreguiçando no sofá.",
      image: "https://placecats.com/millie/300/150",
    },
    {
      id: 4,
      descript: "Gato brincando com um novelo de lã.",
      image: "https://placecats.com/millie/300/150",
    },
    {
      id: 5,
      descript: "Um olhar penetrante: gato observando o mundo com curiosidade.",
      image: "https://placecats.com/millie/300/150",
    }
];

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("Server listening...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(
        posts
    );
});


app.get("/posts/:id", (req, res) => {
    res.status(200).json(
        posts[findPost(req.params.id)]
    );
});