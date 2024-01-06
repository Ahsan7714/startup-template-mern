const  express =require ('express');
const  cors =require ('cors');
const  cookieParser =require ('cookie-parser');
const errorMiddleware =require ('./middleware/error');
const  mongoose =require ('mongoose');
const { connectDB } = require('./database/database');
const app = express();
const cloudinary = require('cloudinary').v2;

require('dotenv').config({path:'./config/config.env'})

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



app.use(cookieParser());

app.use(express.json(
    {
        limit:"50mb"
    }
));

app.use(cors({
    // origin:["http://localhost:5173"],
    origin:["https://r-b.vercel.app"],
    credentials:true,
}))



const adminRoutes=require("./routes/adminRoutes")
const userRoutes=require("./routes/userRoutes");
// create a hello route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
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