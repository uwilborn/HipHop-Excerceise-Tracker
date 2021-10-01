const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const routes = require('./controllers');
const path = require("path");


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

    
const connection = mongoose.connection;
connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })
   



const exerciseRoutes = require('./controllers/exercise');
const userRoutes = require('./controllers/user');

app.use('/exercise', exerciseRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {console.log(`Now listening on port: ${PORT}`)}
);
