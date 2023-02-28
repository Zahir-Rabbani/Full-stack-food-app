const functions = require("firebase-functions");
const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccountKey = require('./serviceAccountKey.json')

const express = require("express");
const app = express();

//Body parser ofr our JSON date

app.use(express.json());

// cros origin
const cors = require("cors");
app.use(cors({origin : true}));
app.use((req, res, next)=>{
    res.set("Access-Control-Allow-Origin","*");
    next();
});

///// firebase credentails
admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    ///databaseURL: "https://rastaurantapp-296b7-default-rtdb.firebaseio.com"
});

/// api endpoint
app.get("/", (req, res)=>{
    return res.send("Hello World");
});
const userRoute = require('./routes/user');
app.use("/api/users", userRoute);

const productRoute = require("./routes/products");
app.use("/api/products/", productRoute);

exports.app = functions.https.onRequest(app);
