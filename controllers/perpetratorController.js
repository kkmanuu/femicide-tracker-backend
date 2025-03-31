// perpetratorController.js
const pool = require('../config/db');

// Add perpetrator to the database
const addPerpetrator = async (req, res, next) => {
  try {
    const { type } = req.body;

    if (!type) {
      return res.status(400).json({ error: 'Perpetrator type is required' });
    }

    const [result] = await pool.execute(
      'INSERT INTO perpetrators (type) VALUES (?)',
      [type]
    );

    res.status(201).json({
      id: result.insertId,
      type,
      created_at: new Date().toISOString()
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addPerpetrator
};
