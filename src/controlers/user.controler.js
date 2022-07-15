const { Router } = require('express');
// const mongoose = require('mongoose')
const User = require('../model/user.model');

// const router = express.Router()

const router = Router()

router.post('/user',async(req, res)=>{

    try{
     const user = await User.create(req.body)
     return res.status(201).send(user)

}
catch(err){

    return res.status(500).send({
       message:err.message 
       
    });
}

});


router.get('/user/:id',async(req, res)=>{

    try{
     const user = await User.findById(req.params.id).lean().exec();
     return res.status(201).send(user)

}
catch(err){

    return res.status(500).send({
       message:err.message 
       
    });
}

});


// router.get('/user',async(req, res)=>{

//     try{
//      const page = req.query.page || 1
//      const limit = req.query.limit || 3

//      let totalpages = 0;

//      let user ;
//     if(req.query.q){
//         if(req.query.q == 'sort'){
//             user = await User.find().skip((page-1) * limit).limit(limit).lean().exec();

//           const totaldocs =  await User.find().countDocuments()

//             totalpages = (Math.ceil(totaldocs / limit))

//            user = req.query.sort == 1 ? user.sort(( a,b) => (a.no - b.no)) :  user.sort(( a,b) => (b.no - a.no))
//         }

//         else if(req.query.q == 'filter'){
          
//             user = await User.find({type:req.query.base}).skip((page-1) * limit).limit(limit).lean().exec();
            
//            const totaldocs = await ser.find({type:req.query.base}).countDocuments()

//            totalpages = (Math.ceil(totaldocs / limit))

//         }

//         else{
//             user = await User.find({block:req.query.block}).skip((page-1) * limit).limit(limit).lean().exec();
//             const totaldocs = await User.find({block:req.query.block}).countDocuments()
//             totalpages = (Math.ceil(totaldocs / limit))
//         }
//     }
//     else{
//         user = await User.find().skip((page-1) * limit).limit(limit).lean().exec();
//         const totaldocs = await User.find().countDocuments()

//         totalpages = (Math.ceil(totaldocs / limit))

//     } 
//     let arr = [];
//     for(let i = 1; i <= totalpages; i++){
//         arr.push(i)
//     } 

//     return res.status(201).send({
//         user, totalpages : arr
//     })
    



// }
// catch(err){

//     return res.status(500).send({
//        message:err.message 
       
//     });
// }

// });

module.exports = router


//https://moviesappdb.herokuapp.com/
