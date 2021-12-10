const express = require ("express");
const app = express();
const {port} = require("./config");
const bodyParesr = require("body-parser");


//db
require("./db/mongoose")

//parsery
//Content-type : application/json
app.use(bodyParesr.json())
//routes
const apiRouter = require("./routes/api")

app.use("/api/",apiRouter);

app.listen(port,function(){
    console.log("swerwer słucha")
})