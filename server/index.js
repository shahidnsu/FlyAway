const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");
const dotenv = require("dotenv");
dotenv.config();
const { mongoose } = require("./db");
const uri = process.env.DB;
const PORT = process.env.SERVER_PORT;

const corsOptions = {
  origin: [
    "http://localhost:4200",
    "https://fly-away.vercel.app",
    "https://flyaway.vercel.app",
    "https://flyaway-drab.vercel.app/",
  ],
  credentials: true,
  exposedHeaders: "Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);
app.use(bodyParser.json());

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
