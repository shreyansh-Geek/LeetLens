import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin:[process.env.FRONTEND_BASE_URL],
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))


app.use(express.json());
app.use(cookieParser());

/**
 * - Routes required
 */


/**
 * - Use Routes
 */
app.get("/", (req, res) => {
    res.send("Hello from the LeetLens server!");
});

export default app;