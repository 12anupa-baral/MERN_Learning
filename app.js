
require('dotenv').config()
const express =require('express')
const connectToDatabase = require('./Database/index')

const app = express()
app.use(express.json())
connectToDatabase();
app.get("/",(req ,res)=>{
    console.log(req)
    res.json("Hello Anupa")
}
)

app.post("/blog",(req ,res)=>{
    console.log(req.body)
    res.status(200).json({
        message:"blog api hit successfully"
    })
}
)

app.listen(process.env.PORT,()=>{
    console.log("Nodejs project started")
})

// mongodb+srv://baralanupa988:jLOiGK8o2miyfUru@cluster0.tm5kq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

