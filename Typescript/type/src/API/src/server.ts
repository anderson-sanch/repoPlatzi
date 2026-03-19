import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json);

app.get("\hello", (req,res) => {
    res.json({message: "!Hola desde la API con Typescript"});
});

app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);  
})

