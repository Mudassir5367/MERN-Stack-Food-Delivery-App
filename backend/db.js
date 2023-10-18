const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.5qomacg.mongodb.net/gofooddb?retryWrites=true&w=majority'
const connectMongoDb = async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true}, async(err,result)=>{
        if(err) console.log('error occur',err);
        else{
            console.log('connected');
            //#6 Read the data
            const fetch_data = await mongoose.connection.db.collection('food_items')
            fetch_data.find({}).toArray(function (err,data){
                if(err) console.log('error in to fetch data',err)
                else {
                    global.food_items = data;
                    // console.log(global.food_items);
            }
            })
        }
    });
}
mongoose.set('strictQuery', false);
module.exports = connectMongoDb;

