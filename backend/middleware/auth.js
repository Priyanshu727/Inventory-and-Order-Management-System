const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Get token from cookies or Authorization header

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach the user information to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  }
};

module.exports = auth;
