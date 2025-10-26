import express from "express";
import OrderRoutes from "./src/routes/OrderRoutes";
import ReportRoutes from "./src/routes/ReportRoutes";
import MenuRoutes from "./src/routes/MenuRoutes";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));


app.use(express.json());

// Removed the classy approach because it felt like an overkill
app.use("/orders", OrderRoutes);
app.use("/reports", ReportRoutes);
app.use("/menu", MenuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is running on port " + PORT));




