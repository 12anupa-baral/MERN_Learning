const express =require('express')
const app = express()
app.get("/",(req ,res)=>{
    console.log(req)
    res.send("Hello Anupa")
}
)

app.get("/about",(req ,res)=>{
    console.log(req)
    res.send("Hello About")
}
)

app.listen(3000,()=>{
    console.log("Nodejs project started")
})