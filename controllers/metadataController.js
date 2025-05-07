const pool = require("../config/db");

exports.getMetadata = async (req, res, next) => {
  try {
    // Get counties
    const [counties] = await pool.query(
      "SELECT name FROM counties ORDER BY name"
    );

    // Get perpetrators
    const [perpetrators] = await pool.query(
      "SELECT type FROM perpetrators ORDER BY type"
    );

    // Get weapons
    const [weapons] = await pool.query(
      "SELECT name FROM weapons ORDER BY name"
    );

    res.json({
      counties: counties.map((c) => c.name),
      perpetrators: perpetrators.map((p) => p.type),
      weapons: weapons.map((w) => w.name),
    });
  } catch (err) {
    next(err);
  }
};

