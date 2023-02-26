console.log("Hello World");

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();

// app.use('/', (req,res,next) => {
//     res.send("This is starting application.");
// })
app.use(express.json())
app.use("/books", router)

mongoose.connect("mongodb+srv://admin:EUMLhE4KhzFZ1IXe@cluster0.drmbvoq.mongodb.net/bookStore?retryWrites=true&w=majority")
        .then(() => console.log("connected to database!!!"))
        .then(() => {
            app.listen(3000);
        }).catch((err) => console.log(err));
// EUMLhE4KhzFZ1IXe