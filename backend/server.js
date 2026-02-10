import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello world");
});


app.listen(port , ()=>{
    console.log(`Listening at port ${port}`)
});