const db = require('../db/db');

class EmployeeQueries {
  static async getAllEmployees() {
    try {
      const [rows] = await db.promise().query('SELECT * FROM employee');
      return rows;
    } catch (err) {
      throw err;
    }
  }

  

  // Add more query functions for updating, deleting, viewing by manager/department, etc.
}

module.exports = EmployeeQueries;
