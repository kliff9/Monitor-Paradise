import express from 'express'
import mongoose from 'mongoose';
import userRouter from './Routers/UserRouter.js';
import productRouter from './Routers/ProductRouter.js';
import dotenv from 'dotenv';
import orderRouter from './Routers/OrderRoute.js';
import path from 'path'
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json()); // all request that contain data would be translated in node app
app.use(express.urlencoded({ extended: true }));

//connect to database Locally
// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/E-com', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect("mongodb+srv://kliff01:kliff01@e-com.qk1or.mongodb.net/E-comDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});  



app.get('/run', (req, res) => {
    res.send('Server is ready');
  });


  app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
const __dirname = path.resolve();



  if (process.env.NODE_ENV === "production") {
 app.use(express.static(path.join(__dirname, "/frontend/build")));
 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
 }) 
 } else {
  app.get('/', (req, res) => {
    res.send('Server is ready');
  });
 }



