import express from "express";
import OrderRoutes from "./src/routes/OrderRoutes";

const app = express();
app.use(express.json());

// Removed the classy approach because it felt like an overkill
app.use("/orders", OrderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is running on port " + PORT));




