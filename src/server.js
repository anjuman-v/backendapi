
const express = require('express');

const userController = require('./controlers/user.controler');

const connect = require('./configs/db')

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 3000;

app.use('/',userController);

module.exports = () => {
app.listen(port, async() => {
    try{
     
    await connect();
    console.log(`server runnig at ${port}`);

    }
    catch(err){
    console.log({
       message : err.message,
       status:"something went wrong" 
    })

    }

})
}
