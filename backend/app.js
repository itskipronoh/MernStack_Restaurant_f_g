import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';


//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
})
dbConnection(process.env.MONGO_URI);



app.use(errorMiddleware);

export default app;
