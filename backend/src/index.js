const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors"); // Import cors module
const mongoose = require('mongoose');
// const passport = require('./config/passport.js');
// const authRoutes = require('./routes/authRoutes.js');
const UserModel = require('./models/User.js');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/scalar")
// ;
// mongoose.connect('mongodb://localhost:27017/scalar', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
// app.use('/auth', authRoutes);

app.use("/", express.static("public"));
app.use(fileUpload());
app.use(cors()); // Use cors middleware


app.post("/extract-text", (req, res) => {
    if (!req.files || !req.files.pdfFile) {
        res.status(400).end();
        return;
    }

    pdfParse(req.files.pdfFile.data).then(result => {
        res.send(result.text);
    }).catch(error => {
        console.error("PDF parsing error:", error);
        res.status(500).end();
    });
});

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No user Exist")
        }
    })
})

PORT=3001
app.listen(PORT,()=>{
    console.log(`Server Conneted to ${PORT}`);
})
