console.log("Hello World");

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();

// app.use('/', (req,res,next) => {
//     res.send("This is starting application.");
// })

app.use("/books")

mongoose.connect("")
        .then(() => console.log("connected to database"))
        .then(() => {
            app.listen(5000);
        }).catch((err) => console.log(err));
// EUMLhE4KhzFZ1IXe