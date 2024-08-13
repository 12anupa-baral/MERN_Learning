const express =require('express')
const connectToDatabase = require('./Database/index')



const app = express()
connectToDatabase();
app.get("/",(req ,res)=>{
    console.log(req)
    res.json("Hello Anupa")
}
)

app.get("/about",(req ,res)=>{
    console.log(req)
    res.json({
     hello:   "Hello About"
    })
}
)

app.listen(3000,()=>{
    console.log("Nodejs project started")
})

// mongodb+srv://baralanupa988:jLOiGK8o2miyfUru@cluster0.tm5kq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

