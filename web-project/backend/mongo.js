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

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;