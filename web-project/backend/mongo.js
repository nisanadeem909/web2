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
  

  }, {
    timestamps: false,
  }
);
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
