const express = require("express");
const app = express() ;
const cors = require("cors");
const port = process.env.PORT || 4000 ;

// midleware
app.use(cors())
app.use(express.json())

const users = [
    {id: 1 , name: "joy sutradhor" , age : 25 , born : 1998}, 
    {id: 2 , name: "jon sutradhor" , age : 23 , born : 1998},
    {id: 3 , name: "anonna sutradhor" , age : 15 , born : 1998},
    {id: 4 , name: "momota sutradhor" , age : 45 , born : 1998}
]

app.get("/" , (req , res ) => {
    res.send("Manage users form server")
})

app.post("/users" , (req , res) => {
    console.log("api hitting inside post")
    const newUser = req.body ;
    newUser.id = users.length + 1 ;
    users.push(newUser)
    res.send(ne)
    console.log(users)
   
})

app.get("/users" , (req , res ) => {
    res.send(users)
})

app.listen(port , (req, res) => console.log(`my users manage site port is ${port}`) )