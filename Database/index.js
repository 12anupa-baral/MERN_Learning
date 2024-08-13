const mongoose =require('mongoose')

async function connectToDatabase(){

   await mongoose.connect('mongodb+srv://baralanupa988:jLOiGK8o2miyfUru@cluster0.tm5kq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
   console.log('Connected to database')
}

module.exports = connectToDatabase