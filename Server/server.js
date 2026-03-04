import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({
    origin:[process.env.FRONTEND_BASE_URL],
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from the LeetLens server!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});