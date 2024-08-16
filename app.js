
require('dotenv').config()
const express =require('express')
const connectToDatabase = require('./Database/index')
const Blog = require('./Model/blogModel')

const app = express()
app.use(express.json())
connectToDatabase();
app.get("/",(req ,res)=>{
    console.log(req)
    res.json("Hello Anupa")
}
)

// app.post("/blog",(req ,res)=>{
//     console.log(req.body)
//     res.status(200).json({
//         message:"blog api hit successfully"
//     })
// }
// )

app.post("/blog",async (req ,res)=>{
    console.log(req.body)
    const {title ,subtitle ,description ,image}=req.body
    if(!title || !description || !image ||!subtitle){
        res.status(400).json({
            message :"please provide title,description,subtitle,image"
        })
    }
    await Blog.create({
        title:title ,
        subtitle:subtitle,
        description:description,
        image:image
    })
    console.log(title ,subtitle ,description ,image)
    res.status(200).json({
         message:"blog api hit successfully"
    })
  
    // const description =req.body.description
    // const title = req.body.title
    // const subtitle = req.body.subtitle
    // const image =req.body.image




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

// const me ={
//     name:"Anupa",
//     age:22
// }
// req.body.title