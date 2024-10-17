const jwt = require('jsonwebtoken');

// Middleware to protect routes
exports.protect = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification failed', error); // Log error for debugging
    return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  }
};

// Role-based middleware (admin only)
exports.isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Not authorized as admin' });
  }
  next();
};

