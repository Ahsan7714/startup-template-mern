const  express =require ('express');
const  cors =require ('cors');
const  cookieParser =require ('cookie-parser');
const errorMiddleware =require ('./middleware/error');
const  mongoose =require ('mongoose');
const { connectDB } = require('./database/database');
const app = express();

require('dotenv').config({path:'./config/config.env'})

connectDB();
app.use(cookieParser());

app.use(express.json());

app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
}))



const adminRoutes=require("./routes/adminRoutes")
const userRoutes=require("./routes/userRoutes");
const CustomError = require('./utils/errorhandler');
// Defining the routes
app.use('/api/v1/admin',adminRoutes);
app.use('/api/v1/user',userRoutes);

const PORT = process.env.PORT || 5000;
// middlewarre for errors
app.use(errorMiddleware);
app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log("Server is running on port "+PORT );
})