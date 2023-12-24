const  express =require ('express');
const  cors =require ('cors');
const  cookieParser =require ('cookie-parser');
const path=require("path")

const  mongoose =require ('mongoose');
const { connectDB } = require('./database/database');
const app = express();

require('dotenv').config({path:'../config/config.env'})

connectDB();
app.use(cookieParser());

app.use(express.json());

app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
}))


const newsLetterRoutes=require("./routes/newsLetterRoutes")

// Defining the routes
app.use('/api/v1/newsletter',newsLetterRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log("Server is running on port "+PORT );
})