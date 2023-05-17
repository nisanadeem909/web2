const {User,Company, Jobs, Post, Jobapplication, Notification, Connection, EmployeeRequests, CurrentEmployees} = require('./mongo');
const fs = require('fs');
const formidable = require('formidable');
const cors=require('cors');
const directoryPath = './images';
const express = require('express');
var app =express();
app.use(cors());
app.use(express.static('public'));
app.use('/profilepictures', express.static('profilepictures'));
app.use('/resumes', express.static('resumes'));
app.use(express.static('backend/profilepictures'));
app.use('/images', express.static('uploads'));
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

      console.log(companies);
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
    ajob = await Jobs.findOne({ JobId:req.body.jobid1 });
    
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
        //res.json(err);
    }
    
    try{
      let ajob2 = await Jobs.findOne({ JobId: req.body.jobid2 });
      
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


/*************************** KOMAL 3 *************************/

app.post('/uploadprofilepic', function(req,res){
  // var name = req.body.name;
   var form = new formidable.IncomingForm();
   var newpath;
   form.parse(req,async function(err,fields,files){
       
       var oldpath = String(files.Image.filepath); //this was files.Image.filepath
       //console.log(oldpath);
       const img_file = files.Image.originalFilename;
       console.log("original file name = " + img_file);

       /*var oldpath = path.resolve(img_file);*/
       newpath = String(__dirname + '/profilepictures/' + files.Image.originalFilename);
       
       console.log("old path = " + oldpath);
       console.log("new path = " + newpath);
       
       /*fs.copyFile(oldpath,newpath,function(err){
           console.log("I AM HERE");
           if(err) throw err;
           console.log("File uploaded and moved");
       });*/

       try {
        fs.copyFileSync(oldpath,newpath);
       }
       catch (err) {
          console.log(err);
       }
       
       //console.log(fields.UserType + " " + fields.Username);
       var pathpfp = newpath;
       var uname = fields.Username;

       if (fields.UserType == "user")
       {
          console.log(uname, " ", pathpfp)
          try {
          
            const result = await User.findOneAndUpdate(
              { username: uname },
              { $set: { profilePicture: img_file } },
              { new: true, overwrite: false }
            );
          } catch (error) {
            console.error('Error updating profile picture:', error);
            // Handle the error
          }
      }
      else {
        console.log(uname, " ", pathpfp)
          try {
          
            const result = await Company.findOneAndUpdate(
              { username: uname },
              { $set: { profilePicture: img_file } },
              { new: true, overwrite: false }
            );
          } catch (error) {
            console.error('Error updating profile picture:', error);
            // Handle the error
          }
      }
   });
   //res.write("Hello");
   
   //res.json({Status:"Received"});

   res.json({data:{NewPath: newpath}});
   res.end();
   
});

app.post("/updateprofiledetails", async(req,res)=>{
  var uname = req.body.uname;
  var name = req.body.name;
  var bio = req.body.bio;
  var uType = req.body.utype;
  console.log(req.body);

  if (uType == "user")
  {

    try {
     const result = await User.findOneAndUpdate(
        { username: uname },
        { $set: {name: name, bio: bio }},
        { new: true, overwrite: false }
      )
      console.log("res:" +result);
    }
    catch (error) {
        console.error('Error updating user profile:', error);
    }

    //worksat -> send employee request
    if (req.body.worksAt)
    {
        var worksAt = req.body.worksAt.value;
        var des = req.body.des;

        console.log (worksAt," ",des);

        try{
          const user = await User.findOne({ username: uname, "worksAt.CompanyUsername": worksAt })
          if (!user)
          {
            await EmployeeRequests.deleteOne({ EmployeeUsername: uname });

            // Create a new employee request for user X
            const newRequest = new EmployeeRequests({
              EmployeeUsername: uname,
              EmployeeName: name,
              Designation: des,
              CompanyUsername: worksAt
            });
  
            console.log(newRequest);
            
            await newRequest.save();
          }
          else
          {
              const result = await User.findOneAndUpdate(
                { username: uname },
                { $set: {"worksAt.Designation": des }},
                { new: true, overwrite: false }
              )
              console.log("res:" +result);
          }
        } catch(err){
            console.log(err);
        }
    }
  }
  else {
    var cType = req.body.ctype;

    var updateFields = { name: name, companyType: cType };
    
    if (bio.trim().length > 0) {
      updateFields.bio = bio;
    }

    try {
      await Company.findOneAndUpdate(
        { username: uname },
        { $set: updateFields },
        { new: true, overwrite: false }
      )
    }
    catch (error) {
        console.error('Error updating company profile: ', error);
    }
  }

  res.end();
})

app.get("/getprofilepicture", async(req,res)=>{
  
  console.log(req.body);

  var imagename = req.body.pfp;
  /*var fullpath = "file://" + __dirname.toString() + '/profilepictures/' + imagename;
  fullpath = fullpath.replace(/\\/g,'/');
  
  console.log(fullpath);
  //console.log(__dirname.replace("\\","/"));

  return `http://localhost:8000/images/${file}`;*/
  /*const imagePath = path.join(__dirname, 'images', imagename);
  res.sendFile(imagePath);*/

  res.end();
})

app.post("/getNoOfApplicants", async(req,res)=>{
  
  console.log("hello ",JSON.stringify(req.body));

  var jobId = req.body.JobId;
  var data;
  
  try {
    const count = await Jobapplication.countDocuments({ jobid: jobId }).exec();
    console.log('Number of entries:', count);
    data = {"count": count};
    // Use the count value
  } catch (error) {
    console.error('Error counting documents:', error);
    data = {"count": -1};
    // Handle the error
  }

  res.json(data);
  res.end();
})


app.post('/uploadresume', function(req,res){
  // var name = req.body.name;
   var form = new formidable.IncomingForm();
   var newpath;
   form.parse(req,async function(err,fields,files){
       
       var oldpath = String(files.Resume.filepath); //this was files.Image.filepath
       //console.log(oldpath);
       const img_file = files.Resume.originalFilename;
       console.log("original file name = " + img_file);

       /*var oldpath = path.resolve(img_file);*/
       newpath = String(__dirname + '/resumes/' + files.Resume.originalFilename);
       
       console.log("old path = " + oldpath);
       console.log("new path = " + newpath);
       
       /*fs.copyFile(oldpath,newpath,function(err){
           console.log("I AM HERE");
           if(err) throw err;
           console.log("File uploaded and moved");
       });*/

       try {
        fs.copyFileSync(oldpath,newpath);
       }
       catch (err) {
          console.log(err);
       }
       
       //console.log(fields.UserType + " " + fields.Username);
       var appID = fields.AppID;

       try {
          
            const result = await Jobapplication.findOneAndUpdate(
              { _id: appID },
              { $set: { resume: img_file } },
              { new: true, overwrite: false }
            );
          } catch (error) {
            console.error('Error uploading resume:', error);
            // Handle the error
          }
   });
   //res.write("Hello");
   
   //res.json({Status:"Received"});

  // res.json({data:{NewPath: newpath}});
   res.end();
   
});

app.post('/postjobapplication', async function(req,res){
  console.log(req.body);
  // var name = req.body.name;
  //var param = {"username": uname,"name":name,"jobid":job.JobId, 
  //"companyusername":job.CompanyUsername, "dob":DOB,"email":email,
  //"phone":phone,"answer":ans,"degree":selectedDegree.label,
  //"school":selectedSchool.value,"major":selectedMajor.label};
   try 
   {
        const newJobApplication = new Jobapplication({
          applicantname: req.body.name,
          jobid: req.body.jobid,
          company: req.body.companyusername,
          dob: req.body.dob,
          applicantusername: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          yearsExp: req.body.exp,
          answer: req.body.answer,
          lastdegree: {
            degree: req.body.degree,
            major: req.body.major,
            university: req.body.school
          }
        });

        console.log(newJobApplication);
  
        await newJobApplication.save();

        res.json({"id":newJobApplication._id});

    } catch(err) {
      console.log(err);
      res.json({"id":-1});
    }


  // res.json({data:{NewPath: newpath}});
   res.end();
   
});

/*************************************************************/

/************************** NABEEHA 3 */

app.post("/searchresults", async(req,res)=>{
  console.log("I have reeceived: " );
  console.log(req.body.searchword);
  //res.send("i am in server side search results");
  //res.end();


  //let peopleobj;
try{
  //ajob = await Jobs.findOne({ Designation: req.body.job1,CompanyName: req.body.comp1 });
  let peopleobj = await User.find({name: req.body.searchword});
    if (peopleobj) {
      console.log("found people ");
      console.log(peopleobj);
      
    // res.json(ajob);
     
    }
    else{
      console.log("ERRORERRORERROR in user");
      //console.log(err);
      res.json(err);
      
    }
  let companyobj = await Company.find({name: req.body.searchword});
  if (companyobj){
    console.log("found company");
    console.log(companyobj);
  }
  else{
    console.log("ERRORERRORERROR in company");
      //console.log(err);
      res.json(err);
  }
  let jobobj = await Jobs.find({Designation: req.body.searchword});
  if (jobobj){
    console.log("found job");
    console.log(jobobj);
  }
  else{
    console.log("ERRORERRORERROR in job");
      //console.log(err);
      res.json(err);
  }


      res.json({"peopleobj":peopleobj,"companyobj":companyobj,"jobobj":jobobj});
      res.end;
  }
  catch(err){
      console.log("ERROR = " + err);
      res.json(err);
  }

});

/*************************************** */


/******* NISA 3 */

app.post('/posts', async (req, res) => {
  try {
    const { username, text, postID, date, imagePath} = req.body;

    // Create a new post object
    const newPost = new Post({
      username,
      text,
      postID,
      date,
      imagePath,
      
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add the post to the database' });
  }
});


app.get('/showcomment/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findOne({ postID: postId });

    if (!post) {
      console.log('Post not found');
      return res.status(404).json({ error: 'Post not found' });
    }

    const comments = post.comments;
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


app.post("/addlikes", async (req, res) => {
  const { postId, username } = req.body;

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

app.get('/allvacancy/:sessionID', (req, res) => {
  const sessionID = req.params.sessionID;
 
   Jobs.find({ CompanyUsername: sessionID })
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

app.get('/company/:sessionID', (req, res) => {
  const sessionID = req.params.sessionID;
 
   Company.findOne({ username: sessionID })
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

app.delete('/delvacancy/:id', async (req, res) => {
  const vacancyId = req.params.id;

  try {
   
    const deletedVacancy = await Jobs.findOneAndDelete({ _id: vacancyId });
    
    if (deletedVacancy) {
      res.json({ message: 'Vacancy deleted successfully' });
    } else {
      res.status(404).json({ error: 'Vacancy not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to delete vacancy' });
  }
});

app.get('/allapps/:id', async (req, res) => {
  const vacancyId = req.params.id;

  try {
    
    const applicants = await Jobapplication.find({jobid : vacancyId });
    res.json(applicants);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to retrieve applicants' });
  }
});

app.get('/allpostsmy/:sessionID', async (req, res) => {
 
  const username = req.params.sessionID; 


  
      Post.find({ username: username })
        .then(posts => {
          res.json(posts);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({ error: 'An error occurred' });
        });
  
 
 
 
  
});





function generateRandomId() {
  const length = 8; // Specify the desired length of the random ID
  let id = '';

  // Generate random digits for the ID
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(Math.random() * 10); // Generate a random digit from 0 to 9
    id += digit.toString();
  }

  return id;
}

app.post('/addnotifcom', async (req, res) => {
  const { postId, username, notifusername, commentText, img } = req.body;
  const randomId = generateRandomId();
  const notification = new Notification({
    username: username,
    notifusername: notifusername,
    text: 'commented on your post',
    notificationType: 2, 
    img : img,
    notificationID: randomId,
    date: new Date(),
    comment: commentText 
  });

  notification.save()
    .then(() => res.status(200).json({ message: 'Notification added successfully' }))
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Failed to add notification' });
    });
});



app.get('/allnotifs/:sessionID', async (req, res) => {
  const username = req.params.sessionID;

Connection.find({ follower: username })
  .then(connections => {
    const followingUsers = connections.map(connection => connection.following);

    Notification.find({ notifusername: { $in: followingUsers } })
      .then(notifications => {
        res.json(notifications);
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

    
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      console.log('Logout Successful!');
      
    }
  });
});

/************* */


/*************************** KOMAL 4 ****************************/

app.post('/getusertype', async (req, res) => {
    console.log(req.body);
    var uname = req.body.user;
    var data;

    try {
      const user = await User.findOne({ username: uname });
      if (user) {
        console.log('User exists');
        data = {"type":"user","user":user};
      } else {
        console.log('User does not exist');
        const company = await Company.findOne({ username: uname });
        if (company) {
          console.log('Company exists');
          data = {"type":"company","user":company};
        } else {
          console.log('Company does not exist');
          data = {"type":"none"}
        }
      }
    } catch(err) {
        console.log(err);
        data = {"type":"none"}
    }

    console.log(data);

    res.json(data);

    res.end();
});


app.post('/getconnections', async (req, res) => {
    console.log(req.body);
    var uname = req.body.username;
    // var data;

    var following = await Connection.countDocuments({ follower: uname });
    var followers = await Connection.countDocuments({ following: uname });

    if (!followers)
        followers = 0;
    if (!following)
        following = 0;

    var cons = {'followers': followers, 'following': following};

    console.log(cons);

    res.json(cons);
    res.end();
});

app.post("/getemployeesk", async(req,res)=>{
  console.log(req.body);

  const company = req.body.user;

  var msg;

  try {
    const employees = await CurrentEmployees.find({ CompanyUsername: company });
    msg = {"data":employees};
  }
  catch (error) {
      console.error('Error getting employees:', error);
      msg = {"data": "error"};
  } 

  res.json(msg);

  res.end();

})

app.post("/checkifconnected", async(req,res)=>{
  console.log(req.body);

  const curruser = req.body.curruser;
  const conuser = req.body.conuser;

  var msg;

  try {
    const result = await Connection.findOne({ follower: curruser, following: conuser });
    if (result)
      msg = {"exists":true};
    else 
      msg = {"exists":false};
  }
  catch (error) {
      console.error('Error getting employees:', error);
      msg = {"exists": "error"};
  } 

  res.json(msg);

  res.end();

})

app.post("/connectk", async(req,res)=>{
  console.log(req.body);

  const curruser = req.body.curruser;
  const conuser = req.body.conuser;

  var msg;

  try {
    
      const newConnection = new Connection({
        follower: curruser,
        following: conuser
      });

      await newConnection.save();
      console.log("saved");
      
  }
  catch (error) {
      console.error('Error connecting:', error);
  } 

  res.end();

})

app.post("/disconnectk", async(req,res)=>{
  console.log(req.body);

  const curruser = req.body.curruser;
  const conuser = req.body.conuser;

  var msg;

  try {
    
      await Connection.deleteOne({ follower: curruser, following: conuser });
      console.log("deleted");
      
  }
  catch (error) {
      console.error('Error disconnecting:', error);
  } 

  res.end();

})


/****************************************************************/



/********************* NABEEHA 4 **********************/

app.post("/getcurrentemployees", async(req,res)=>{
  let msg = "I am in get current employees";
  console.log(req.body);

  const empreq = await CurrentEmployees.find({CompanyUsername:req.body.user});
  if (empreq){
      console.log("found");
      res.json({"empreq":empreq});
      res.end();
  }
  else{
    console.log("error");
    res.json({"empreq":"Error"});
    res.end();
  }

});

app.post("/employeerequests", async(req,res)=>{
  let msg = "I am in employee requests";
  console.log(req.body);

  const empreq = await EmployeeRequests.find({CompanyUsername:req.body.user});
  if (empreq){
      console.log("found");
      
      
      res.json({"empreq":empreq});
      res.end();
  }
  else{
    console.log("found");
    res.json({"empreq":"Error"});
    res.end();
  }

});

app.post("/acceptemployeerequest", async(req,res)=>{
  console.log(req.body);
  const companyname = await Company.findOne({username:req.body.companyusername});
  const deletedreq = await EmployeeRequests.findOneAndDelete({EmployeeUsername:req.body.employeeusername});
  //console.log("empname: " + req.body.empreq);
  const newemp = new CurrentEmployees({EmployeeUsername:req.body.employeeusername,EmployeeName:req.body.empname,Designation:req.body.designation,CompanyUsername:req.body.companyusername,CompanyName:companyname.name});
  
  newemp.save().then(()=>{
      let msg = "account created successfully";   
      console.log("employee request accepted");
      
      
      
      
      res.json({"message":msg});
       res.end();
   }).catch((err)=>{
       console.log(err);
   })

   try{
    console.log("Works at Arr = ");
   
    let worksAtArr = {Designation:req.body.designation,CompanyUsername:req.body.companyusername};
    console.log(worksAtArr)
    const user = await User.findOne({username:req.body.employeeusername});
    if (user)
    user.worksAt = {Designation:req.body.designation,CompanyUsername:req.body.companyusername};
    user.save();
   }
   catch(err)
   {
    console.log(err);
   }
});


app.post("/deleteemployeerequest", async(req,res)=>{
  console.log(req.body);
  const companyname = await Company.findOne({username:req.body.companyusername});
  const deletedreq = await EmployeeRequests.findOneAndDelete({EmployeeUsername:req.body.employeeusername});
  //console.log("empname: " + req.body.empreq);
  console.log("Deleted Successfully");
});


app.post("/deleteemployee", async(req,res)=>{
  console.log(req.body);
  //const companyname = await Company.findOne({username:req.body.companyusername});
  const deleted = await CurrentEmployees.findOneAndDelete({EmployeeUsername:req.body.employeeusername,CompanyUsername:req.body.companyusername});
  //console.log("empname: " + req.body.empreq);
  const user = await User.findOne({ username:req.body.employeeusername});
  if (user){
    user.worksAt = undefined;
    await user.save();
  }
  console.log("Deleted Successfully");
});

/******************************************************/


/******************************** NISA 4 ******************************/

app.get('/search/:query', async (req, res) => {
  const searchQuery = req.params.query;

  try {
  
    const userResults = await User.find({ username: { $regex: searchQuery, $options: 'i' } }).limit(10);
    const companyResults = await Company.find({ name: { $regex: searchQuery, $options: 'i' } }).limit(10);
    const jobResults = await Jobs.find({ Designation: { $regex: searchQuery, $options: 'i' } }).limit(10);

 
    const searchResults = [...userResults, ...companyResults, ...jobResults];
    console.log(searchResults);
    res.json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while performing the search.' });
  }
});

app.get('/finduser/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username: username });
    if (user) {
      return res.json({ user });
    }

    const company = await Company.findOne({ username: username });
    if (company) {
      return res.json({ company });
    }

    res.status(404).json({ message: 'User or Company not found' });
  } catch (error) {
    console.error('Error retrieving user or company:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/profilepicture/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username });
    if (user && user.profilePicture) {
      return res.json({ user });
    }

    const company = await Company.findOne({ username });
    if (company && company.profilePicture) {
      return res.json({ company });
    }

    res.status(404).json({ message: 'User or company not found' });
  } catch (error) {
    console.error('Error retrieving user or company:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/**********************************************************************/



/*************** KOMAL 5 ****************/

app.post('/updatevacancy', async (req, res) => {
  console.log(req.body);
  var newJob = req.body.newJob;
  var data;

  try {
    await Jobs.findOneAndUpdate({ JobId: newJob.JobId }, {
      $set: {
        Designation: newJob.Designation,
        Description: newJob.Description,
        DegreeRequired: newJob.DegreeRequired,
        MajorRequired: newJob.MajorRequired,
        YearsofExperience: newJob.YearsofExperience,
        Salary: newJob.Salary,
        WeeklyWorkingHours: newJob.WeeklyWorkingHours,
        YearlyPaidLeaves: newJob.YearlyPaidLeaves
      }
    }, { new: true, overwrite: false })

    data = {"type":"saved"}
    
  } catch(err) {
      console.log(err);
      data = {"type":err}
  }

  console.log(data);

  res.json(data);

  res.end();
});

/****************************************/

/************* NABEEHA 5 *************/
app.post("/getcurrentapplicants", async(req,res)=>{
  console.log("req.body ");
  console.log(req.body.param);

  const app_list = await Jobapplication.find({jobid:req.body.jobid});
  if (app_list){
    console.log("found apps");
    console.log(app_list);
    res.json({"apps":app_list});
    res.end();

  }
  else{
    res.json({"apps":"Could not find any jobs with this ID"});
    res.end();
  }
  
});
/*************************************/

/********************** NISA 5 **********************/

app.post("/addcomment", async (req, res) => {
  const { postId, username, text, img } = req.body;

  try {
    const post = await Post.findOne({ postID: postId });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.comments.push({
      username: username,
      date: new Date(),
      text: text,
      img : img,
    });

    await post.save();

    return res.status(200).json({ message: "Comment added successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/uploadpostpic', function(req,res){
  // var name = req.body.name;
   var form = new formidable.IncomingForm();
   var newpath;
   form.parse(req,async function(err,fields,files){
       
       var oldpath = String(files.Image.filepath); //this was files.Image.filepath
       //console.log(oldpath);
       const img_file = files.Image.originalFilename;
       console.log("original file name = " + img_file);

       /*var oldpath = path.resolve(img_file);*/
       newpath = String(__dirname + '/profilepictures/' + files.Image.originalFilename);
       
       console.log("old path = " + oldpath);
       console.log("new path = " + newpath);
   

       try {
        fs.copyFileSync(oldpath,newpath);
       }
       catch (err) {
          console.log(err);
       }
       
       
       var pathpfp = newpath;
       var uname = fields.Username;
       try {
    
        var ids = generateRandomId();
          // Create a new post object
          const newPost = new Post({
            username: fields.Username,
            text : fields.UserType,
            postID : ids,
            date :new Date(),
            imagePath : img_file,
            
          });
      
          // Save the post to the database
          const savedPost =  newPost.save();
      
          res.status(200).json(savedPost);
        } catch (error) {
          res.status(500).json({ error: 'Failed to add the post to the database' });
        }
      
      
         res.end();

   });
  
   
   
});


app.get('/allappl/:username', (req, res) => {
  const { username } = req.params;

  Jobapplication.findOne({ applicantusername: username })
    .then(applications => {
      res.json(applications);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.get('/findjob/:jobId', (req, res) => {
  const { jobId } = req.params;

  Jobs.findOne({ JobId: jobId })
    .then(job => {
      if (job) {
        res.json(job);
      } else {
        res.status(404).json({ error: 'Job not found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

/****************************************************/


/********************* KOMAL 6 *********************/

app.post('/getotherappscomparisondata', async (req, res) => {
  console.log(req.body);

  var jobID = req.body.jobID;
  var uname = req.body.username;
  var appID = req.body.appID;

  var top6Skills;
  var data;

  try {
    const applications = await Jobapplication.find({ jobid: jobID })
   // console.log(applications);
   const userApplications = await User.find({ username: { $in: applications.map(application => application.applicantusername) } });
   //console.log(userApplications);
   top6Skills = await User.aggregate([
    { $match: { _id: { $in: userApplications.map(user => user._id) } } },
    { $unwind: '$skills' },
    { $group: { _id: '$skills', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 6 },
    { $project: { _id: 1, count: 1 } }
  ]);
  console.log(top6Skills);
  const user = await User.findOne({ username: uname });
  const userSkillIds = user.skills;
  //console.log(userSkillIds);
  const skillCountsPresent = top6Skills.filter(skill => userSkillIds.includes(skill._id));
  console.log(skillCountsPresent);

  const degreeCounts = await Jobapplication.aggregate([
    { $match: { jobid: jobID } },
    { $group: { _id: "$lastdegree.degree", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 2 }
  ]);

  console.log(degreeCounts);

  const majorCounts = await Jobapplication.aggregate([
    { $match: { jobid: jobID } },
    { $group: { _id: "$lastdegree.major", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 2 }
  ]);

  console.log(majorCounts);

  const totalApplications = await Jobapplication.countDocuments({ jobid: jobID });

  console.log(totalApplications);

  const yearsExpList = await Jobapplication.find({ jobid: jobID }).select('yearsExp -_id');
  const yearsExpValues = yearsExpList.map(app => app.yearsExp);
  console.log(yearsExpValues);
  
    //data = {"topSkills": top6Skills, "presentSkills":skillCountsPresent, "top2degrees":degreeCounts, "top2majors":majorCounts,"totalApplications":totalApplications, "expYearList":yearsExpValues};

  
  }
  catch (err)
  {
    console.log("Error getting top 6 skills: "+err)
  }

  res.end();
});

/***************************************************/

/************************ NISA 6 *************************/

app.get('/allNetwork/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const followers = await Connection.find({ following: userId });

    const followerUsernames = followers.map(follower => follower.follower);

    const users = await User.find({ username: { $in: followerUsernames } }).exec();
    const companies = await Company.find({ username: { $in: followerUsernames } }).exec();

    res.json(users.concat(companies));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve followers' });
  }
});



app.get('/allFollowing/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const following = await Connection.find({ follower: userId }).exec();

    const followingUsernames = following.map(follow => follow.following);

    const users = await User.find({ username: { $in: followingUsernames } }).exec();
    const companies = await Company.find({ username: { $in: followingUsernames } }).exec();

    res.json(users.concat(companies));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve following users' });
  }
});




app.post('/signupcompany', async (req, res) => {
 
  const { fullname, username, email, password, type } = req.body;
  
  const existingUser = await Company.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res.status(400).json({ message: 'Username or email already exists' });
  } 


  const newCompany = new Company({
    username: username,
    email: email,
    password: password,
    companyType: type,
    name: fullname
  });

 
  newCompany.save()
    .then(() => {
      req.session.username = username;
      res.json({ message: 'Company signup successful' });
    })
    .catch((error) => {
    
      res.status(500).json({ error: 'Failed to signup company' });
    });
});

app.post('/signupuser', async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;

    
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const newUser = new User({
      username,
      name :fullname,
      email,
      password
    });

    req.session.username = username;

    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/**********************************************************/
app.post('/addnotifconnect', async (req, res) => {
  const { usernames,notifusername, image } = req.body;
   var pid = generateRandomId();
  const notification = new Notification({
    username : usernames,
    notifusername: notifusername, // Replace 'user' with the username of the user who performed the like
    text: 'started following you', // Modify the notification text as desired
    notificationType: 3, // Assuming 1 represents a like notification
    notificationID: pid, // Assuming postId represents a unique identifier for the post
    img : image,
    date: new Date()
  });

  notification.save()
    .then(() => res.status(200).json({ message: 'Notification added successfully' }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Failed to add notification' });
    });
});

app.post('/addnotif', async (req, res) => {
  const { postId, username,notifusername, img } = req.body;
   id = generateRandomId();
  const notification = new Notification({
    username: username,
    notifusername: notifusername, // Replace 'user' with the username of the user who performed the like
    text: 'liked your post', // Modify the notification text as desired
    notificationType: 1, // Assuming 1 represents a like notification
    notificationID: id, // Assuming postId represents a unique identifier for the post
    img : img,
    date: new Date()
  });

  notification.save()
    .then(() => res.status(200).json({ message: 'Notification added successfully' }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Failed to add notification' });
    });
});


app.listen(8000, () => {
    console.log("Server is running on port 8000"); 
})