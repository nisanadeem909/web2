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
    
  }

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const connection = new Schema({
  follower: {
    type: String
    
  },
  following: {
   type: String
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
  }

}, {
  timestamps: true,
});

const Jobapplication = mongoose.model('Jobapplication', userSchema);

module.exports = Jobapplication;