import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";

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
 * SESSION MIDDLEWARE
 */

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      httpOnly: true
    },

    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions"
    })
  })
);

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