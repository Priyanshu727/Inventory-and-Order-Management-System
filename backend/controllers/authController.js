const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// Register new user
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log('Register attempt with email:', email); // Log the email being registered

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      console.log('User already exists:', email); // Log if user already exists
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password for user:', email); // Log the hashed password

    // Create new user
    user = await User.create({ name, email, password: hashedPassword, role });
    console.log('New user created:', user); // Log the newly created user object

    // Create JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });
    console.log('Generated token for new user:', user.email); // Log the generated token

    // Store token in cookie
    res.cookie('token', token, { httpOnly: true });
    console.log('Token set in cookie for new user:', user.email); // Log that the token has been set in a cookie

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: { _id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (error) {
    console.error('Registration error: ', error); // Log error for debugging
    res.status(500).json({ success: false, message: 'Server error' });
  }
};



// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const trimmedPassword = password.trim(); // Trim whitespace
  console.log('Login attempt with email:', email); // Log the email being used to login

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found with email:', email); // Log if user is not found
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }
    console.log('User found:', user); // Log the found user object

    // Compare provided password with hashed password in DB
    const isMatch = await bcrypt.compare(trimmedPassword, user.password);
    console.log('Password match result:', isMatch); // Log the result of the password comparison
    if (!isMatch) {
      console.log('Invalid password for user:', email); // Log if password does not match
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    console.log('Generated token for user:', user.email); // Log the generated token

    // Set token in cookie
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    console.log('Token set in cookie for user:', user.email); // Log that the token has been set in a cookie

    // Send successful login response
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: { _id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (error) {
    console.error('Login error: ', error); // Log error for debugging
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
// Logout user
exports.logout = (req, res) => {
  // Clear the token cookie
  res.clearCookie('token', { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
  res.status(200).json({ success: true, message: 'User logged out successfully' });
};
