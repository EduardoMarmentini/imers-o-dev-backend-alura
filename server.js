import express from "express"
import routes from "./src/routes/post-route.js";

const app = express();
routes(app)

app.listen(3000, () => {
    console.log("Server listening...");
});