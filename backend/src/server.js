import express from "express";
import dotenv from "dotenv"
import tasksRouter from "./routes/tasksRouter.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))

app.use("/api/tasks/", tasksRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
  });
})

