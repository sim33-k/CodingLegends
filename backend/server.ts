import express from "express";
import OrderRoutes from "./src/routes/OrderRoutes";
import ReportRoutes from "./src/routes/ReportRoutes";

const app = express();
app.use(express.json());

// Removed the classy approach because it felt like an overkill
app.use("/orders", OrderRoutes);
app.use("/reports", ReportRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is running on port " + PORT));




