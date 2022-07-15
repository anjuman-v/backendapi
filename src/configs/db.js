
const mongoose = require('mongoose');

const connect = () =>{ 
    return mongoose.connect('mongodb://127.0.0.1:27017/Userdatabase')
    // 'mongodb+srv://anjuman:anjuman@cluster0.l0hn9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
   

}

module.exports = connect;
