
import app from "./app";

import {DB} from "./config/db";
 import {env} from "./config/env";

const PORT=env.PORT;

async function startServer() {
    try {
        await DB.connect();
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Database connection failed", err);
        process.exit(1);
    }
}

startServer();