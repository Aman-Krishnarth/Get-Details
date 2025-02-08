const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./models/db.js");
const detailsRouter = require("./routes/detailsRouter.js");
const userRouter = require("./routes/userRouter.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.REACT_APP_ALLOWED_ORIGINS
  ? process.env.REACT_APP_ALLOWED_ORIGINS.split(",")
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // Allow requests with no origin (like mobile apps or curl requests)
      callback(null, true);
    } else {
      // Block requests from other origins
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow only these methods (adjust as needed)
  allowedHeaders: ["Content-Type", "Authorization"], // Define allowed headers (adjust as needed)
};

// Apply CORS with the custom options
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/details", detailsRouter);
app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, () => {
  connectDb();

  console.log(`Server is running on port ${process.env.PORT}`);
});
