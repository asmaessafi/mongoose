const mongoose = require('mongoose');
const personSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    favoriteFood:{
        type: [String],
    },
})

const Person=mongoose.model('person',personSchema);

module.exports=Person;