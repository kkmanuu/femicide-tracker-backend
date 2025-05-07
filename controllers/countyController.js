// countyController.js
const pool = require('../config/db');

// Add county to the database
const addCounty = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'County name is required' });
    }

    
    const [result] = await pool.execute(
      'INSERT INTO counties (name) VALUES (?)',
      [name]
    );

    res.status(201).json({
      id: result.insertId,
      name,
      created_at: new Date().toISOString()
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addCounty
};
