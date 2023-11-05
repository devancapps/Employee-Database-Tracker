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

  static async addEmployee(firstName, lastName, roleId, managerId) {
    try {
      const [result] = await db.promise().query(
        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
        [firstName, lastName, roleId, managerId]
      );
      return result;
    } catch (err) {
      throw err;
    }
  }

}

module.exports = EmployeeQueries;
