const mongoose=require('mongoose');
const url=process.env.MONGO_URI;

const client=mongoose.connect(url)
.then(()=>console.log('Connected to MongoDB database'))
.catch(err=>console.log(err));

module.exports=client;