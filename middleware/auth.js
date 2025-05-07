const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

