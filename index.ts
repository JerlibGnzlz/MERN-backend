import express,{Express,Request,Response } from "express"

import dotenv from "dotenv"

dotenv.config();

const app: Express= express();

const port : string | number = process.env.PORT || 3000;


app.get("/saludo", (req:Request, res:Response) => {
    res.send("Soy jerlib");
});



app.listen(port, () => {
    console.log(`EXPRESS Server runnig: http://localhost:${port}`);
});
