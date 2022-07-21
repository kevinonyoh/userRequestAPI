require('dotenv').config()
const express = require("express");
const cors = require("./middleware/cors");
const Router = require("./routes/router")
const bodyParser = require("body-parser")
const error = require("./middleware/error")
const logs = require("./middleware/logs")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors)
app.use(logs)
app.use("/api/v1/user-request/",Router);

app.get("/",(req,res)=>{
     res.send("app is working")
})

app.use(error)

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log("App is working on port 5000")
})