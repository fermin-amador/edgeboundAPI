const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

const dotenv = require('dotenv');
dotenv.config({ path: './config/configuration.env' });
const connectDB = require('./config/database');
connectDB();




app.use('/', require('./routes/productCategory'));
app.use('/', require('./routes/product'));

app.listen(process.env.PORT);

