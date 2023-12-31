const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("App listening on port 3000...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
