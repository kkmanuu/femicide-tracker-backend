const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../config/jwt');
const User = require('../models/user');

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create JWT
    const token = jwt.sign(
      { id: user.id, username: user.username },
      secret,
      { expiresIn }
    );

    res.json({
      id: user.id,
      username: user.username,
      token
    });
  } catch (err) {
    next(err);
  }
};


exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const userId = await User.create(username, hashedPassword);

    // Create JWT
    const token = jwt.sign(
      { id: userId, username },
      secret,
      { expiresIn }
    );

    res.status(201).json({
      id: userId,
      username,
      token
    });
  } catch (err) {
    next(err);
  }
};