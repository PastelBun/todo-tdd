const express=require('express')
const app=express()
const todoRoutes=require("./routes/todo.routes")

app.use("/todos", todoRoutes)

app.get('/', (req,res)=>{
    res.send('express test')
})

app.listen(3015,()=>{
    console.log('server is running')
})

module.exports=app