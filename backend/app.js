/*const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");



mongoose.set("strictQuery", true);
dotenv.config({ path: "./.env" });
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// middleware

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}

app.use(cors(corsOptions));


// connect MongoDB


    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })


// route
app.get("/", (req, res) => {
    console.log("hey there");
    res.status(201).json({message: "Connected to Backend!"});
   
});

app.use("/", require("./routes/router.js"));

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();*/


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const Razorpay=require("razorpay");
var cors = require("cors");
app.use(bodyParser({limit: '50mb'}));
app.use(cors());
mongoose.set("strictQuery", true);
dotenv.config({ path: "./.env" });
// app.set("veiw engine", "html");
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("BackEnd");
});
app.use(morgan("tiny"));
// Connection with MongoDB


//Parse Request to the Body
// app.use(bodyparser.urlencoded({ extended: true }));

// To Load The routers
app.use("/", require("./routes/router"));

app.listen(PORT, () => {
  console.log(` Backend is running at http://localhost:${PORT}`);
});


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

