const db = require('../config/db');  // Import the MySQL connection pool

// Get all femicide cases
const getAllFemicides = async () => {
  try {
    const [rows] = await db.execute('SELECT * FROM femicides');
    return rows;
  } catch (err) {
    throw new Error('Failed to fetch femicides');
  }
};

// Add a new femicide case
const addFemicide = async (femicide) => {
  const { county, age, date, perpetrator, weapon, description } = femicide;
  const query = 'INSERT INTO femicides (county, age, date, perpetrator, weapon, description) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [county, age, date, perpetrator, weapon, description];

  try {
    const [result] = await db.execute(query, values);
    return { id: result.insertId, county, age, date, perpetrator, weapon, description };
  } catch (err) {
    throw new Error('Failed to add femicide case');
  }
};

// Get metadata (counties, perpetrators, weapons)
const getMetadata = async () => {
  try {
    const [rows] = await db.execute('SELECT * FROM metadata LIMIT 1');
    return rows[0];
  } catch (err) {
    throw new Error('Failed to load metadata');
  }
};

module.exports = { getAllFemicides, addFemicide, getMetadata };
