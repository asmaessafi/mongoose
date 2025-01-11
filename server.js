const express = require('express');
require('dotenv').config()
const port=process.env.PORT || 5001;
const Person=require('./Models/person.js');
const app=express();
//connect to database
const client=require('./dataBase.js');
//create a person 
const p1=new Person({
    name:'jhon',
    age:24,
    favoriteFood:['pizza','burger']
})
// //save the person to the database
// p1.save()
//     .then(()=>console.log('person added'))
//     .catch((err)=>console.log(err));

// //create many people
const arrayOfPeople1=[
    {
        name:'mohamed',
        age:54,
        favoriteFood:['lablaby','couscous']
    },
    {
        name:'ahmed',
        age:26,
        favoriteFood:['tagin','brik']
    },
    {
        name:'ali',
        age:27,
        favoriteFood:['mouloukhia','mlewy']
    }
]
// Person.create(arrayOfPeople1)
//     .then(()=>console.log('people added'))
//     .catch((err)=>console.log(err));

const arrayOfPeople2=[{
    name:'ramez',
    age:54,
    favoriteFood:['salad','escalope']
},
{
    name:'bechir',
    age:40,
    favoriteFood:['tagin','fricassé']
},
{
    name:'salah',
    age:89,
    favoriteFood:['pizza','mosly']
},
{
    name:'ranim',
    age:42,
    favoriteFood:['mlewy','lablaby']
},
{
    name:'firdaws',
    age:18,
    favoriteFood:['couscous','brik']
},
{
    name:'rayhan',
    age:30,
    favoriteFood:['mouloukhia','tagin']
}
]
// Person.create(arrayOfPeople2)
//     .then(()=>console.log('people added'))
//     .catch((err)=>console.log(err));

const arrayOfPeople3=[
    {
        name:'Mary',
        age:60,
        favoriteFood:['tacos','pizza']
    },
    {
        name:'Mary',
        age:21,
        favoriteFood:['bourger','omlette']
    },
    {
        name:'Mary',
        age:33,
        favoriteFood:['crépe','mlewy']
    }
]
// Person.create(arrayOfPeople3)
//     .then(()=>console.log('people added'))
//     .catch((err)=>console.log(err));


// Person.create(arrayOfPeople1)
//     .then(()=>console.log('people added'))
//     .catch((err)=>console.log(err));



//find all the people having a given name
// Person.find({name:'ali'})
//     .then((person)=>console.log(person))
//     .catch((err)=>console.log(err));

// //find just one person , using Model.findOne()
// Person.findOne()
// .then((person)=>console.log(person))
// .catch((err)=>console.log(err));

// // //find a person by id
// Person.findById('6782bce85a256a89a2a030d8')
// .then((person=>console.log(person)))
// .catch((err=>console.log(err)));

// Person.find({_id:'6782bce85a256a89a2a030d8'}).exec()
//   .then((person)=>{
//         person[0].favoriteFood.push('hamburger');
//         person[0].save()
//         .then(()=>console.log('person found and updated'))
//         .catch((err)=>console.log(err));
        
//   })

// .then(()=>console.log('success'))
// .catch((err)=>console.log(err));


// // //Perform New Updates on a Document Using model.findOneAndUpdate()
// Person.findOneAndUpdate({name:"ahmed"},{age:20},{new:true})
// .then((person)=>console.log(person))
// .catch((err)=>console.log(err));

// // //Delete One Document Using model.findByIdAndDelete
// Person.findByIdAndDelete('6782bae8c35ac92ba1877219')
// .then(()=>console.log('person deleted'))
// .catch((err)=>console.log(err));

// // //Delete Many Documents with model.remove()
// Person.deleteMany({name:'Mary'})
// .then(()=>console.log('people deleted'))
// .catch((err)=>console.log(err));

// // //Chain Search Query Helpers to Narrow Search Results
Person.find({favoriteFood:'couscous'})
      .sort({name:1})
      .limit(2)
      .select({age:0})
      .exec()
      .then((people)=>console.log(people))
        .catch((err)=>console.log(err));

app.listen(port,(err)=>{
    err?
    console.log(err):
    console.log(`server is running on port ${port}`)});