const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.5qomacg.mongodb.net/gofooddb?retryWrites=true&w=majority'
// const mongoURI = 'mongodb://gofood:gofood123@ac-kncpz4e-shard-00-00.5qomacg.mongodb.net:27017,ac-kncpz4e-shard-00-01.5qomacg.mongodb.net:27017,ac-kncpz4e-shard-00-02.5qomacg.mongodb.net:27017/gofooddb?ssl=true&replicaSet=atlas-hatr6w-shard-0&authSource=admin&retryWrites=true&w=majority'
const connectMongoDb = async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true}, async(err,result)=>{
        if(err) console.log('error occur',err);
        else{
            console.log('connected');
            //#6 Read the data
            const fetch_data = await mongoose.connection.db.collection('food_items')
                fetch_data.find({}).toArray(async function (err,data){
                const foodCategory = await mongoose.connection.db.collection('foodCategory')
                // console.log(foodCategory);
                foodCategory.find({}).toArray(function (err, catData){
                    if(err) console.log(err);
                    else{
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })

            })
        }
    });
}
mongoose.set('strictQuery', false);
module.exports = connectMongoDb;

