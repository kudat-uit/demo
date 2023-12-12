//kết nối database
const mongoose = require('mongoose');
async function connect(){
try{
    await mongoose.connect('mongodb+srv://20521175:30042002Ptd@cluster0.zt8jltj.mongodb.net/?retryWrites=true&w=majority');
    
    console.log('susseccfully');
}
catch(error){
    console.log('failure');
}
}
module.exports={connect};