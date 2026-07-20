import Express,{Application} from "express";
const app:Application = Express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});


export default app;
