const express =  require('express');
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

const user = require('./routes/users');
const category = require('./routes/category');
const product = require('./routes/product');
const order = require('./routes/order');
const cart = require('./routes/cart')

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('uploads/products'))

app.get("/",(req,res)=>{
    res.send("server runing");
})

app.use(cors());
app.use(express.json());
app.use( user )
app.use( category )
app.use( product )
app.use( order )
app.use( cart )

const PORT=process.env.PORT || 3002 

app.listen(PORT,()=>{
    console.log("server runing",PORT);
})