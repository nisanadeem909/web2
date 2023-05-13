const {User,Company, Jobs, Post, Jobapplication, Notification, Connection, EmployeeRequests, CurrentEmployees} = require('./mongo');
const fs = require('fs');
const formidable = require('formidable');
const cors=require('cors');
const directoryPath = './images';
const express = require('express');
var app =express();
app.use(cors());
app.use(express.static('public'));
app.use('/images', express.static('uploads'));
app.use(express.static('public'));
app.use(express.static('files'));
const path = require('path');
app.use("/static",express.static(path.join(__dirname,'public')));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
const cookieParser = require("cookie-parser");


app.use(cookieParser());

const session = require('express-session');
app.use(session({
 secret: '123456',
 resave: true,
 saveUninitialized: true,
 
}));

/***NABEEHA */
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
/******** */



/**NISA */

app.get('/:sessionID', (req, res) => {
    const sessionID = req.params.sessionID;
   
     User.findOne({ username: sessionID })
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });
  
  
    app.post('/login', async (req, res) => {
      const { username, password } = req.body;
      try {
        const users = await User.findOne({ username: username, password: password });
        if (!users) {
          const companys = await Company.findOne({ username: username, password: password });
          if (!companys) {
            console.log("Login Unsuccessful Company!");
            res.status(401).json({ message: "Login failed" }); 
          } else {
            req.session.username = username;
            console.log("Login Successful Company!");
            res.json({ userType: "company", sessionId: req.session.username }); 
          }
        } else {
          req.session.username = username;
          req.session.save();
          console.log(req.session.username);
          console.log("Login Successful!");
          res.json({ userType: "user", sessionId: req.session.username }); 
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
    });
    
  
    
    
    app.get('/logout', (req, res) => {
     
      req.session.destroy((err) => {
        if (err) {
          console.error('Error destroying session:', err);
          res.status(500).json({ message: 'Server error' });
        } else {
          res.redirect('/login');
        }
      });
    });

/**** */


/****************************                   KOMAL                    *******************************/


app.post("/getuserprofiledetails", async(req,res)=>{
    //console.log(req.body);

    // get username from session!!!
    var uname = 'komal';

    var user = await User.findOne({username: uname});

    var following = await Connection.countDocuments({ follower: uname });
    var followers = await Connection.countDocuments({ following: uname });

    if (!followers)
        followers = 0;
    if (!following)
        following = 0;

    var info = {'user':user,'cons':{'followers': followers, 'following': following}}

    //user = {...user, 'cons':}
    
    res.json(info);

    res.end();

})

app.post("/getcompanyprofiledetails", async(req,res)=>{
    //console.log(req.body);

    // get username from session!!!
    var uname = 'fastlhr';

    var user = await Company.findOne({username: uname});

    var following = await Connection.countDocuments({ follower: uname });
    var followers = await Connection.countDocuments({ following: uname });

    if (!followers)
        followers = 0;
    if (!following)
        following = 0;

    var info = {'company':user,'cons':{'followers': followers, 'following': following}}

    //user = {...user, 'cons':}
    
    res.json(info);

    res.end();

})

app.post("/addskill", async(req,res)=>{
    var uname = req.body.username;
    var skill = req.body.newSkill;

    try {

    await User.findOneAndUpdate(
        { username: uname },
        { $push: { skills: skill } },
        { overwrite: false, new: true }
      )
    }
    catch (error) {
        console.error('Error updating user skills:', error);
    }

    res.end();
})

app.post("/removeskill", async(req,res)=>{
    var uname = req.body.username;
    var skill = req.body.oldSkill;

    try {

    await User.findOneAndUpdate(
        { username: uname },
        { $pull: { skills: skill } },
        { overwrite:false, new: true }
      )
    }
    catch (error) {
        console.error('Error updating user skills:', error);
    }

    res.end();
})

app.post("/addeducation", async(req,res)=>{
    var uname = req.body.username;
    var newEdu = req.body.newEdu;

    try {

    await User.findOneAndUpdate(
        { username: uname },
        { $push: { education: newEdu } },
        { overwrite: false, new: true }
      )
    }
    catch (error) {
        console.error('Error updating user education:', error);
    }

    res.end();
})

app.post("/removeeducation", async(req,res)=>{
    var uname = req.body.username;
    var educ = req.body.oldEduc;

    try {

    await User.findOneAndUpdate(
        { username: uname },
        { $pull: { education: educ } },
        { overwrite:false, new: true }
      )
    }
    catch (error) {
        console.error('Error updating user education:', error);
    }

    res.end();
})

app.post("/editeducation", async(req,res)=>{
    var uname = req.body.username;
    var oldEduc = req.body.oldEduc;
    var newEduc = req.body.newEduc;

    try {

    await User.updateOne(
        { username: uname, 'education._id': oldEduc._id },
        { $set: { 'education.$': newEduc } }
      )
    }
    catch (error) {
        console.error('Error updating user education:', error);
    }

    res.end();
})

app.post("/addexperience", async(req,res)=>{
    var uname = req.body.username;
    var newExp = req.body.newExp;

    try {

    await User.findOneAndUpdate(
        { username: uname },
        { $push: { experience: newExp } },
        { overwrite: false, new: true }
      )
    }
    catch (error) {
        console.error('Error updating  work experience:', error);
    }

    res.end();
})

app.post("/removeexperience", async(req,res)=>{
    var uname = req.body.username;
    var exp = req.body.oldExp;

    try {

    await User.findOneAndUpdate(
        { username: uname },
        { $pull: { experience: exp } },
        { overwrite:false, new: true }
      )
    }
    catch (error) {
        console.error('Error updating work experience:', error);
    }

    res.end();
})

app.post("/editexperience", async(req,res)=>{
    var uname = req.body.username;
    var oldExp = req.body.oldExp;
    var newExp = req.body.newExp;

    try {

    await User.updateOne(
        { username: uname, 'experience._id': oldExp._id },
        { $set: { 'experience.$': newExp } }
      )
    }
    catch (error) {
        console.error('Error updating work experience:', error);
    }

    res.end();
})

app.post("/getcompanydropdownlist", async(req,res)=>{
    //console.log(req.body);

    const companies = await Company.aggregate([
        {
          $project: {
            _id: 0,
            value: "$username",
            label: "$name"
          }
        }
      ]);

    res.json(companies);

    res.end();

})

app.post("/getschooldropdownlist", async(req,res)=>{
    //console.log(req.body);

    const companies = await Company.aggregate([
        {
          $match: {
            companyType: 'education'
          }
        },
        {
          $project: {
            _id: 0,
            value: '$username',
            label: '$name'
          }
        }
      ]);

    res.json(companies);

    res.end();

})

app.post("/postjob", async(req,res)=>{
    console.log(req.body);
    const reqJob = req.body;

    var jobId;

    await Jobs.find().sort({ JobId: -1 }).limit(1)
    .then((jobs) => {
      if (jobs.length > 0) {
        jobId = jobs[0].JobId;
        console.log('Maximum JobId:', jobId);
      } else {
        console.log('No jobs found');
        jobId = -1;
      }
    })
    jobId++;

    const newJob = new Jobs({
        JobId: jobId,
        Designation: reqJob.pos,
        CompanyName: reqJob.companyname,
        CompanyUsername: reqJob.companyuser,
        Description: reqJob.desc,
        DegreeRequired: reqJob.degree.label,
        MajorRequired: reqJob.major.label,
        YearsofExperience: reqJob.exp,
        Salary: reqJob.salary,
        WeeklyWorkingHours: reqJob.hours,
        YearlyPaidLeaves: reqJob.leaves
      });

    var msg;

    try {

        await newJob.save();
        msg = {"status": "success"};
    }
        catch (error) {
            console.error('Error adding job:', error);
            msg = {"status": error};

    } 

    res.json(msg);

    res.end();

})


/*******************************************************************************************************/

app.listen(8000, () => {
    console.log("Server is running on port 8000"); 
})