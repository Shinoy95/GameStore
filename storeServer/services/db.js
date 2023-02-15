//import mongoose

const mongoose = require('mongoose');

//define the connection string

mongoose.connect('mongodb://localhost:27017/store',()=>{
    console.log('connected to mongodb');
})

//create a model for the games

const Game=mongoose.model('Game',{
    //schema creation

})

module.exports={
    Game
}