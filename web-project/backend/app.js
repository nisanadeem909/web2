const express = require('express');
const {User,
    Company,
    Jobs,
    Post,
    Jobapplication,
    Notification,
    Connection,
    EmployeeRequests,
    CurrentEmployees} = require('./mongo');
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
app.post("/signupuser", async(req,res)=>{
   console.log("I am in signup user");
    console.log(req.body);
    
    /*User Signup - yeh chal raha hai perfectly(response nai send aur recive ho raha) */
    var e = req.body.email;
    var p = req.body.password;
    var u = req.body.username;
    var n = req.body.fullname;

    var edu = [{'school':'FAST','degree':"Bachelors",'major':'Software Engineering','startYear':2020,'endYear':2024}];
    
    const existingUser = await Company.findOne({ username:u });
    const anotherExisting = await User.findOne({username: u});
    if (existingUser) {
        console.log("Username already exists in company db");
        res.send("this username is taken");
        //return res.status(500).json({message:"this username is taken"});
        res.end();
    }
    else if(anotherExisting) {
        console.log("Username already exists in users db");
        res.send("this username is taken");
        //return res.status(500).json({message:"this username is taken"});
        res.end();
    }
    else {
            const user = new User({username:u,email:e,password:p,education:edu,name:n});
            console.log("user =" + user);
            user.save().then(()=>{
                console.log("account created successfully");
                res.send("account created successfully");
                //return res.json({message:"account created successfully"});
                res.end();
            }).catch((err)=>{
                console.log(err);
                res.send("technical difficulty in creating your account");
                //return res.json({message:"technical difficulty in creating your account"});
                res.end();
                //res.send("username is taken already");
            })
        }
    
    
});

app.post("/signupcompany", async(req,res)=>{
   console.log("in am in signup company");
    //console.log(req.body);
    
    
    var e = req.body.email;
    var p = req.body.password;
    var u = req.body.username;
    var n = req.body.fullname;
    //var t = req.body.type;
    var t = "education";
   
    let message = "message: ";
    let sendmsg;
    const existingUser = await Company.findOne({ username:u });
    const anotherExisting = await User.findOne({username: u});
    if (existingUser) {
        console.log("Username already exists in company db");
        message = message.concat("this username is already taken");
        //res.send("this Username already taken");
        //return res.status(500).json({message:"this username is taken"});
       // res.end();
    }
    else if(anotherExisting) {
        console.log("Username already exists in users db");
        message = message.conact("this username is already taken");
        //res.send("this Username already taken");
        //return res.status(500).json({message:"this username is taken"});
        //res.end();
    }
    else {
            const company = new Company({username:u,email:e,password:p,companyType:t,name:n});
            console.log("user =" + company);
            company.save().then(()=>{
                console.log("account created successfully");
                message = message.concat("account created successfully");
                //res.send("account created successfully!");
                //return res.json({message:"account created successfully"});
          //      res.end();
            }).catch((err)=>{
                console.log(err);
                message = message.concat("could not create account");
                //res.send("technical difficulty in creating your account");
                //return res.json({message:"technical difficulty in creating your account"});
            //    res.end();
                
            })
        }
    console.log("sending message " + message);
        res.send(message);
      res.end();
});

app.get("/currentjobs", async(req,res)=>{
    /*Delete this later - temporarily added to insert some jobs */       
    /* const newjob = new Jobs({JobId:478,CompanyName:"Educative",Designation:"IT specialist",Description:"we are a famous company",YearsofExperience:"7",WeeklyWorkingHours:"40",YearlyPaidLeaves:"30"});
            console.log("newjob =" + newjob);
            newjob.save().then(()=>{
                console.log("job created successfully");
                
            }).catch((err)=>{
                console.log(err);
                
            })*/
    
    
    

    Jobs.find().then((result, err) => {
        
        if (err) {
          
          console.log("ERRORERRORERROR");
          console.log(err);
        }
        else{
            
            console.log("retrieving all jobs.");
            //res.send(result);
            //res.end();
            res.json(result);
        }
        
      })
    
 });
app.listen(8000, () => {
    console.log("Server is running on port 8000"); 
});