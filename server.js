const express = require('express');
const mongoose = require('mongoose');


const path = require("path");


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"))

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
   



const exerciseRoutes = require('./routers/indexroutes');
const schemaRoutes = require('./routers/schemaroutes');

app.use(exerciseRoutes);
app.use(schemaRoutes);

app.listen(PORT, () => {console.log(`Now listening on port: ${PORT}`)}
);
