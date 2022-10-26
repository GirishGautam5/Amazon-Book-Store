import express from 'express';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/user.js';
import productRoute from './routes/product.js';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));


const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '/client/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/client/build/index.html'))
// );
app.listen(5000, () => { console.log("Server started at http://localhost:5000") });
