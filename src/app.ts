import Express,{Application} from "express";
import router from "./routes/index";
const app:Application = Express();

app.use("/api/v1",router);


export default app;
