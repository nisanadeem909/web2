const express = require('express');
const User = require('./mongo');
const cors = require('cors')


const session = require('express-session');
const mongoose = require('mongoose');
//const { default: UserPrivateProfilePage } = require('../src/Components/CompanyPublicProfilePage');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// app.use(bodyParser.json());
// app.use(cookieParser());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
  }));

app.get('/', cors(), (req, res) => {
})
/*
app.post("/login", async(req,res)=>{
    const{email, password}=req.body
    // console.log("ygygt")
    
    
    try{
        // const check = await User.findOne({email:email, password:password})
        const check = await User.findOne({ $or: [{ email }, { password }] });
        // console.log(email)
        // console.log(check)
        if(check)
        {
           
              
            // True condition to be logged in
            req.session.userId = check.email;
            console.log(req.session.userId);

            

            // var c = res.cookie('userId', check._id, { maxAge: 30 * 24 * 60 * 60 }); // Set a cookie that expires in 30 days
            // console.log(c);
            // res.json({ check });
            res.json( req.session.userId)


            // app.get('/my-route', (req, res) => {
            //     req.session.myData = 'some data';
            //     res.json({ myData: req.session.myData });
            //   });

        }
        else{
            res.json("notexists")
        }
    }
    catch(e){
        res.json("notexists")
        console.log(e);
    }
})
*/
//const User = new mongoose.model("User", userSchema);
app.post("/signup", async(req,res)=>{
    //const{username,email, password}=req.body;
    console.log(req.body);
    var e = req.body.email;
    var p = req.body.password;
    var u = req.body.username;
    var edu = [{'school':'FAST','degree':"Bachelors",'major':'Software Engineering','startYear':2020,'endYear':2024}];
    const user = new User({email:e,password:p,username:p,education:edu});/*third argument mei koi masla hai */
    console.log("username= " +  req.body.username);
    let output;
    user.save().then(()=>{
        //res.render("secrets");
    }).catch((err)=>{
        console.log(err);
    })
console.log(output);
    
    /*await User.findOne({username:username},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({username,email,password});
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })*/
})


app.listen(8000, () => {
    console.log("Server is running on port 8000"); 
})