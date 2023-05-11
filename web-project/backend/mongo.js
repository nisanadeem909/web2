const { Double, Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://nisanadeem90:jobifyproject@cluster0.fqimjde.mongodb.net/";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    console.log("Connected to database");
}
).catch((err) => {
    console.log(err);
});

const Schema = mongoose.Schema;
/*
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
  ,
  bio:{
    type: String

  },

  worksAt:{
    type: String
    
  },

  profilePicture:{
    type: String
  },

  skills :{
    type: [String],
    

  },

  education: [{
    school: String,
    degree: String,
    major: String,
    startYear: Number,
    endYear: Number
  }],

  experience: [{
    company: String,
    position: String,
    startYear: Number,
    endYear: Number
  }],

  name: {
    type: String,
    required: true

  }

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
*/

/*-------------------------Current Employees Table----------------------*/
const CurrentEmployeesSchema = new Schema(
  {

    EmployeeUsername:{
      type: String,
      unique:true,
      required: true
    },
    EmployeeName:{
      type: String,
      required: true
    },
    Designation:{
      type: String,
      required: true
    },
    CompanyName :{
      type:String,
      required: true
    },
    CompanyUsername :{
      type:String,
      required: true
    }

  }, {
    timestamps: false,
  }
);
const CurrentEmployees = mongoose.model('CurrentEmployees',CurrentEmployeesSchema);
module.exports = CurrentEmployees;

/*-------------------------Employee Request Table----------------------*/
const EmployeeRequestSchema = new Schema(
  {
    EmployeeUsername:{
      type: String,
      required: true
    },
    EmployeeName:{
      type: String,
      required: true
    },
    Designation:{
      type: String,
      required: true
    },
    CompanyName :{
      type:String,
      required: true
    },
    CompanyUsername :{
      type:String,
      required: true
    }
  

module.exports = User;

const companySchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
  ,

  companyType:{
    type: String,
    required: true
  },

  bio:{
    type: String

  },

  profilePicture:{
    type: String
  },

  ratings: [{
    username: String,
    rating: Number
  }],

  aboutUs : {
    country: String,
    city: String,
    website: String,
    startYear: Number,
    endYear: Number,
    text: String
  },

  contact: {
    email: String,
    phone: String,
    website: String
  },

  name: {
    type: String,
    required: true
  }

}, {
  timestamps: true,
});


module.exports = User;

const connection = new Schema({
  follower: {
    type: String
    
  },
  following: {
   type: String
  }

const Company = mongoose.model('Company', companySchema);

module.exports = Company;

const notificationSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  text:{
    type: String,
    required: true
  },

  notificationType:{
    type: Number,
    required: true
  },

  notificationID :{
    type: Number,
    required: true,
    unique: true
  },

  date:{
    type: Date,
    required: true
  }


}, {
  timestamps: true,
});


const Connection = mongoose.model('Connection', userSchema);

module.exports = Connection;



const jobapplication = new Schema({
  applicantname: {
    type: String
    
  },
  jobid: {
   type: Number
  },
  company: {
   type: String
  },
  dob: {
   type: Date
  },
  applicantusername: {
   type: String
  },
  email: {
   type: String
  },
  phone: {
   type: Number
  },
  lastdegree: [
   "degree",
   "major",
   "university"
  ],
  yearsExp : {
    type: Number
  },
  answer:{
    type : String
  },
  resume:{
    type: String

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },

  text:{
    type: String

  },

  postID :{
    type: Number,
    required: true,
    unique: true
  },

  date:{
    type: Date,
    required: true
  },

  imagePath:{
    type:String
  },

  likedBy:{
    type: [String]
  },

  comments:[{
    username: String,
    date: Date,
    text: String
  }],

  sharedBy:{
    type: [String]

  }

}, {
  timestamps: true,
});


const Jobapplication = mongoose.model('Jobapplication', userSchema);

module.exports = Jobapplication;

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


const EmployeeRequests = mongoose.model('EmployeeRequests',EmployeeRequestSchema);
module.exports = EmployeeRequests;

/*------------------------------JOBS TABLE-------------------------------- */
const JobsSchema = new Schema(
  {

    JobId:{
      type: Number,
      unique: true,
      required: true
    },
    Designation:{
      type: String,
      required: true
    },
    CompanyName :{
      type:String,
      required: true
    },
    Description :{
      type:String
    },
    DegreeRequired :{
      type: [String]
    },
    MajorRequired :{
      type: [String]
    },
    YearsofExperience :{
      type:Number
    },
    Salary :{
      type: Number
      
    },
    WeeklyWorkingHours :{
      type:Number
    },
    YearlyPaidLeaves :{
      type:Number
    }
    

  }, {
    timestamps: false,
  }
);
const Jobs = mongoose.model('Jobs',JobsSchema);
module.exports = Jobs;

