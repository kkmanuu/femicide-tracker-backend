// models/CaseModel.js
const pool = require('../config/db'); // Assuming db.js is in the config folder

class Case {
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM cases ORDER BY date DESC');
      return rows;
    } catch (err) {
      throw new Error('Error fetching cases from the database');
    }
  }

  static async create(userId, { county, age, date, perpetrator, weapon, description }) {
    try {
      const [result] = await pool.query(
        'INSERT INTO cases (user_id, county, age, date, perpetrator, weapon, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [userId, county, age, date, perpetrator, weapon, description]
      );
      return result.insertId;
    } catch (err) {
      throw new Error('Error inserting case into the database');
    }
  }
}

module.exports = Case;
