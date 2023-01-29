const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");
const dotenv = require("dotenv");
const { mongoose, uri } = require("./db");
const PORT = process.env.SERVER_PORT || 3000;

const corsConfig = {
    origin: "http://localhost:4200",
    credentials: true,
    exposedHeaders: "Authorization",
};

dotenv.config();
app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

//development branch

console.log("development branch is created ");
// handling if routes not found
app.get("*", (req, res) => {
    res.status(404);
    res.send("Server not found");
});

(async function bootstrap() {
    try {
        await mongoose.connect(uri);
        console.log("Database Connected");
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
})();
