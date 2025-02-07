const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./models/db.js');
const detailsRouter = require('./routes/detailsRouter.js');
const userRouter = require("./routes/userRouter.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World');
}); 

app.use('/api/v1/details', detailsRouter);
app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, () => {

    connectDb();

    console.log(`Server is running on port ${process.env.PORT}`);
    
});