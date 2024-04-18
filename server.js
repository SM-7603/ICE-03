const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes/studentsRoutes");

const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(errorHandler);
app.use("/api/students", routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
