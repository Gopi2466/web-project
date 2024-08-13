const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

})
const AdminSchema = new mongoose.Schema({

})
const CourseSchema = new mongoose.Schema({

})


const User = mongoose.model("User", UserSchema);
const Admin = mongoose.model("Admin", AdminSchema);
const Course = mongoose.model("Course", CourseSchema);