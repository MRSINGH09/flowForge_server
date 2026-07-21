import {Router} from "express";

const authRouter:Router=Router();

authRouter.get("/",(req,res)=>{
    res.send("Auth Route");
}); 

export default authRouter;