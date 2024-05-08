const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB URI
const dbURI = 'mongodb+srv://rahatcse5bu:01783307672Rahat@cluster0.tvdegit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// User Model
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  department: String,
  rollNumber: String,
  registrationNumber: String,
  gender: String,
  bloodGroup: String
});
const User = mongoose.model('User', UserSchema);

// Registration Endpoint
app.post('/register', async (req, res) => {
    const { firstName, lastName, phone, email, department, rollNumber, registrationNumber, gender, bloodGroup, password } = req.body;
  
    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
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
        password  // The password is automatically hashed by the pre-save middleware
      });
      UserSchema.pre('save', async function(next) {
        if (this.isModified('password') || this.isNew) {
          this.password = await bcrypt.hash(this.password, 10);
          next();
        } else {
          return next();
        }
      });
      
      await user.save();
      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check for existing user
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ msg: 'User not found' });
  
      // Validate password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
  
      res.json({ msg: 'User logged in successfully', user: { id: user.id, name: user.firstName } });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  
// Starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
