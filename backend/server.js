import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import authRoute from "./routes/authRoutes.js";
import { Register, Login, Me, Logout } from "../Controllers/authController.js";

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/user", userRoutes)
app.use("/admin", adminRoutes)
app.use("/auth",authRoute)
const PORT = process.env.PORT
app.listen(PORT, () => console.log(` Server running on port ${PORT}`))