const Case = require("../models/CaseModel");

exports.getAllCases = async (req, res, next) => {
  try {
    const cases = await Case.getAll(); // Fetch all cases from the database
    res.json(cases); // Return the cases in JSON format
  } catch (err) {
    console.error("Error fetching cases:", err); // Log the error to console for debugging
    next(err); // Pass the error to the error-handling middleware
  }
};


exports.addCase = async (req, res, next) => {
  try {
    const { county, age, date, perpetrator, weapon, description } = req.body;

    // Validate required fields
    if (!county || !age || !date || !perpetrator || !weapon) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Insert new case into the database and get the inserted case ID
    const caseId = await Case.create(req.user.id, {
      county,
      age,
      date,
      perpetrator,
      weapon,
      description,
    });

    // Send a success response with the new case ID
    res.status(201).json({
      id: caseId,
      message: "Case added successfully",
    });
  } catch (err) {
    console.error("Error adding case:", err); // Log the error to console for debugging
    next(err); // Pass the error to the error-handling middleware
  }
};
