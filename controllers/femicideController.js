const pool = require('../config/db');  // Import the database connection

// Function to get all femicides
const getFemicides = async (req, res) => {
  try {
    // Query to fetch all femicide cases from the database
    const [femicides] = await pool.execute('SELECT * FROM femicide_cases');
    res.status(200).json(femicides);  // Respond with the femicide cases
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve femicides' });
  }
};

const addFemicide = async (req, res) => {
  try {
    const { county, age, date, perpetrator, weapon, description, user_id } = req.body;

    // Log the incoming data to debug
    console.log('Received data:', req.body);

    // Check if all fields are present
    if (!county || !age || !date || !perpetrator || !weapon || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Insert the data into the database
    const [rows, fields] = await pool.execute(
      'INSERT INTO femicide_cases (county, age, date, perpetrator, weapon, description, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [county, age, date, perpetrator, weapon, description, user_id]
    );

    res.status(201).json({ message: 'Femicide case added successfully' });
  } catch (error) {
    console.error('Error adding femicide case:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get metadata (assuming it's a placeholder for now)
const getMetadata = async (req, res) => {
  try {
    const metadata = {};  // Your logic to fetch metadata goes here
    res.status(200).json(metadata);  // Respond with metadata
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve metadata' });
  }
};

module.exports = {
  getFemicides,
  addFemicide,
  getMetadata
};
