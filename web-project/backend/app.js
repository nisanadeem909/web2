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
             const user = new User({username:u,email:e,password:p,name:n});
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



app.get('/user/:sessionID', (req, res) => {
    const sessionID = req.params.sessionID;
   
     User.findOne({ username: sessionID })
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ error: 'User not now found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });
  
  //NEW

  app.post("/addlikes/:sessionID:username", async (req, res) => {
    const postId = req.params.sessionID;
    const username = req.params.username;
  
    try {
      const post = await Post.findOne({ postID: postId });
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      if (post.likedBy.includes(username)) {
        return res.status(400).json({ error: "User already liked the post" });
      }
  
      post.likedBy.push(username);
      await post.save();
  
      return res.status(200).json({ message: "Post liked successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  


app.get('/likes/:sessionID',async (req, res) => {
    const postId = req.params.sessionID; 

    try {
     
      const post = await Post.findOne({ postID: postId });
    
      if (!post) {
        
        console.log('Post not found');
        return;
      }
    
      const numberOfLikes = post.likedBy.length;
      console.log(`Number of likes: ${numberOfLikes}`);
      res.json(numberOfLikes);
    } catch (err) {
     
      console.error(err);
    }
    
  });

  app.get('/comments/:sessionID',async (req, res) => {
    const postId = req.params.sessionID; 

    try {
     
      const post = await Post.findOne({ postID: postId });
    
      if (!post) {
        
        console.log('Post not found');
        return;
      }
    
      const numberOfLikes = post.comments.length;
      console.log(`Number of likes: ${numberOfLikes}`);
      res.json(numberOfLikes);
    } catch (err) {
     
      console.error(err);
    }
    
  });

  app.get('/shares/:sessionID',async (req, res) => {
    const postId = req.params.sessionID; 

    try {
     
      const post = await Post.findOne({ postID: postId });
    
      if (!post) {
        
        console.log('Post not found');
        return;
      }
    
      const numberOfLikes = post.sharedBy.length;
      console.log(`Number of likes: ${numberOfLikes}`);
      res.json(numberOfLikes);
    } catch (err) {
     
      console.error(err);
    }
    
  });

  app.get('/allposts/:sessionID', async (req, res) => {
   
    const username = req.params.sessionID; 

    Connection.find({ follower: username })
      .then(connections => {
        const followingUsers = connections.map(connection => connection.following);
    
        Post.find({ username: { $in: followingUsers } })
          .then(posts => {
            res.json(posts);
          })
          .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'An error occurred' });
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
      });
    
   
   
   
   
    
 });


  app.get('/jobs/:sessionID', async (req, res) => {
    const sessionID = req.params.sessionID;
    
    let major;
    let degree;
  
    try {
      const user = await User.findOne({ username: sessionID })
      if (user) {
        major = user.education[0].major;
        degree = user.education[0].degree;
        const jobs = await Jobs.find({ MajorRequired: major, DegreeRequired: degree });
        if (jobs.length > 0) {
          res.json(jobs);
        } else {
          res.status(404).json({ error: 'No jobs found for the specified degree and major' });
        }
      } else {
        res.status(404).json({ error: 'User not really found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  


 app.get('/alljobs', async (req, res) => {

   
     Jobs.find()
      .then(jobs => {
        if (jobs) {
          
          res.json(jobs);

        } else {
          res.status(404).json({ error: 'Job not marjao found' });
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
           
            res.status(401).json({ message: "Login failed" }); 
          } else {
            req.session.username = username;
           
            res.json({ userType: "company", sessionId: req.session.username }); 
          }
        } else {
          req.session.username = username;
          req.session.save();
       
         
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
    console.log(req.body);
    var uname = req.body.user;

    var user = await User.findOne({username: uname});

    var following = await Connection.countDocuments({ follower: uname });
    var followers = await Connection.countDocuments({ following: uname });

    if (!followers)
        followers = 0;
    if (!following)
        following = 0;

    var info = {'user':user,'cons':{'followers': followers, 'following': following}}

    console.log(info);
    
    res.json(info);

    res.end();

})

app.post("/getcompanyprofiledetails", async(req,res)=>{
    console.log(req.body);
    var uname = req.body.user;

    var user = await Company.findOne({username: uname});

    var following = await Connection.countDocuments({ follower: uname });
    var followers = await Connection.countDocuments({ following: uname });

    if (!followers)
        followers = 0;
    if (!following)
        following = 0;

    var info = {'company':user,'cons':{'followers': followers, 'following': following}}

    console.log(info);
    
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

/***KOMAL NEW **************/

app.post("/setaboutus", async(req,res)=>{
    console.log(req.body);

    const newAboutUs = req.body.aboutUs;
    const company = req.body.user;

    var newAbout = {"country":newAboutUs.country,"city":newAboutUs.city,"website":newAboutUs.website,"text":newAboutUs.text,"startYear":newAboutUs.startYear,"endYear":newAboutUs.endYear};

    var msg;

    await Company.updateOne(
        { username: company },
        { $set: { aboutUs: newAbout } });  

    res.json(msg);

    res.end();

})

app.post("/getavgrating", async(req,res)=>{
    console.log(req.body);

    const company = req.body.user;

    var msg;

    try {

        const rating  = await Company.aggregate([
            { $match: { username: company } },
            { $unwind: "$ratings" },
            {
              $group: {
                _id: "$_id",
                averageRating: { $avg: "$ratings.rating" }
              }
            }
          ])
        if (!rating[0])
            msg = {"rating": "none"}
        else 
            msg = {"rating": rating[0].averageRating}
        
    }
        catch (error) {
            console.error('Error adding job:', error);
            msg = {"rating": "error"};

    } 
    console.log(msg);

    res.json(msg);

    res.end();

})

app.post("/setcontact", async(req,res)=>{
    console.log(req.body);

    const newContact = req.body.contact;
    const company = req.body.user;

    var msg;

    try {
        await Company.updateOne(
            { username: company },
            { $set: { contact: newContact } });  
        msg = {"status": "success"};
    }
    catch (error) {
        console.error('Error adding job:', error);
        msg = {"status": error};
    } 

    res.json(msg);

    res.end();

})

app.post("/getcompanyjobs", async(req,res)=>{
    console.log(req.body);

    const company = req.body.user;

    var msg;

    try {
        const jobs = await Jobs.find({ CompanyUsername: company })
        .sort({ JobId: -1 })
        .limit(5);
        msg = {"data": jobs};
    }
    catch (error) {
        console.error('Error adding job:', error);
        msg = {"data": "error"};
    } 

    res.json(msg);

    res.end();

})

/************************* */


/****NABEEHA 2 */
app.post("/comparejobs", async(req,res)=>{
  console.log(req.body);
  console.log(req.body.job1);
  console.log( req.body.job2);
  

  /*res.send("Hello from compare jobs");
  res.end();*/
 let ajob;
  try{
    ajob = await Jobs.findOne({ Designation: req.body.job1,CompanyName: req.body.comp1 });
    
      if (ajob) {
        console.log("found a job " + ajob);
      // res.json(ajob);
       
      }
      else{
        console.log("ERRORERRORERROR");
        //console.log(err);
        res.json(err);
        
      }
    }
    catch(err){
        console.log("ERROR = " + err);
        res.json(err);
    }
    
    try{
      let ajob2 = await Jobs.findOne({ Designation: req.body.job2,CompanyName: req.body.comp2 });
      
        if (ajob2) {
          console.log("found a job " + ajob2);
        
        res.json({"job1": ajob,"job2":ajob2}); 
        
         
        }
        else{
          console.log("ERRORERRORERROR");
          //console.log(err);
          res.json(err);
          
        }
      }
      catch(err){
          console.log("ERROR = " + err);
          res.json(err);
      }
      
      res.end();

    
});

/************ */


/****** NISA 2 */

app.post("/addlikes/:sessionID:username", async (req, res) => {
  const postId = req.params.sessionID;
  const username = req.params.username;

  try {
    const post = await Post.findOne({ postID: postId });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.likedBy.includes(username)) {
      return res.status(400).json({ error: "User already liked the post" });
    }

    post.likedBy.push(username);
    await post.save();

    return res.status(200).json({ message: "Post liked successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});



app.get('/likes/:sessionID',async (req, res) => {
  const postId = req.params.sessionID; 

  try {
   
    const post = await Post.findOne({ postID: postId });
  
    if (!post) {
      
      console.log('Post not found');
      return;
    }
  
    const numberOfLikes = post.likedBy.length;
    console.log(`Number of likes: ${numberOfLikes}`);
    res.json(numberOfLikes);
  } catch (err) {
   
    console.error(err);
  }
  
});

app.get('/comments/:sessionID',async (req, res) => {
  const postId = req.params.sessionID; 

  try {
   
    const post = await Post.findOne({ postID: postId });
  
    if (!post) {
      
      console.log('Post not found');
      return;
    }
  
    const numberOfLikes = post.comments.length;
    console.log(`Number of likes: ${numberOfLikes}`);
    res.json(numberOfLikes);
  } catch (err) {
   
    console.error(err);
  }
  
});

app.get('/shares/:sessionID',async (req, res) => {
  const postId = req.params.sessionID; 

  try {
   
    const post = await Post.findOne({ postID: postId });
  
    if (!post) {
      
      console.log('Post not found');
      return;
    }
  
    const numberOfLikes = post.sharedBy.length;
    console.log(`Number of likes: ${numberOfLikes}`);
    res.json(numberOfLikes);
  } catch (err) {
   
    console.error(err);
  }
  
});

app.get('/allposts/:sessionID', async (req, res) => {
 
  const username = req.params.sessionID; 

  Connection.find({ follower: username })
    .then(connections => {
      const followingUsers = connections.map(connection => connection.following);
  
      Post.find({ username: { $in: followingUsers } })
        .then(posts => {
          res.json(posts);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({ error: 'An error occurred' });
        });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    });
  
 
 
 
 
  
});


app.get('/jobs/:sessionID', async (req, res) => {
  const sessionID = req.params.sessionID;
  
  let major;
  let degree;

  try {
    const user = await User.findOne({ username: sessionID })
    if (user) {
      major = user.education[0].major;
      degree = user.education[0].degree;
      const jobs = await Jobs.find({ MajorRequired: major, DegreeRequired: degree });
      if (jobs.length > 0) {
        res.json(jobs);
      } else {
        res.status(404).json({ error: 'No jobs found for the specified degree and major' });
      }
    } else {
      res.status(404).json({ error: 'User not really found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});



app.get('/alljobs', async (req, res) => {

 
   Jobs.find()
    .then(jobs => {
      if (jobs) {
        
        res.json(jobs);

      } else {
        res.status(404).json({ error: 'Job not marjao found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

/************* */


app.listen(8000, () => {
    console.log("Server is running on port 8000"); 
})