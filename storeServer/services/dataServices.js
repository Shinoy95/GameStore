const db = require('./db')

//get all games details from db

const getGames=()=>{
    db.Game.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    games:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Game not found'
                }
            }
        }
    )
}
module.exports={
    getGames
}