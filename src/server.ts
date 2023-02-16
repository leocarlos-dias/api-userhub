import "express-async-errors";
import { app } from "./app";
import { client } from "./config/database";

app.listen(process.env.PORT, () => {
    console.log("Server is running on PORT:" + process.env.PORT);

    client.connect()
        .then(() => console.log("Database was new connection"))
        .catch((err) => console.error('Connection error', err.stack));
});