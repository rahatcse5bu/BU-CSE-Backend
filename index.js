const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB URI
const dbURI =
  "mongodb+srv://rahatsir:rahatsir@cluster0.igbstt4.mongodb.net/BU-CSE?retryWrites=true&w=majority&socketTimeoutMS=360000&connectTimeoutMS=360000";

// const dbURI =
//   "mongodb+srv://rahatcse5bu:01783307672Rahat@cluster0.tvdegit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// User Model
const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    department: String,
    rollNumber: String,
    registrationNumber: String,
    gender: String,
    bloodGroup: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

const User = mongoose.model("User", UserSchema);

app.get("/", async (req, res) => {
  res.send("Welcome APi");
});
app.get("/users", async (req, res) => {
  // make get all user api
  try {
    const users = await User.find();
    res.json({
      success: true,
      data: users,
      message: "Get All users",
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
});
app.get("/users/:userId", async (req, res) => {
  const userId = req.params.userId;
  // make get  user api
  try {
    const users = await User.findById(userId);
    res.json({
      success: true,
      data: users,
      message: "Get All users",
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
});
app.delete("/users/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      data: deletedUser,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
});

app.put("/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDataToUpdate = req.body; // Assuming the request body contains the updated user data

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update user data
    for (const key in userDataToUpdate) {
      if (userDataToUpdate.hasOwnProperty(key)) {
        user[key] = userDataToUpdate[key];
      }
    }

    // Save the updated user
    await user.save();

    res.json({
      success: true,
      data: user,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to update user",
    });
  }
});

// Registration Endpoint
app.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    department,
    rollNumber,
    registrationNumber,
    gender,
    bloodGroup,
    password,
  } = req.body;

  console.log("req.body~~", req.body);
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user
    user = new User({
      firstName,
      lastName,
      phone,
      email,
      department,
      rollNumber,
      registrationNumber,
      gender,
      bloodGroup,
      password, // The password is automatically hashed by the pre-save middleware
    });

    await user.save();
    // const user = await User.create(req.body);
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});
// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    res.json({
      msg: "User logged in successfully",
      user: { id: user.id, name: user.firstName },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
