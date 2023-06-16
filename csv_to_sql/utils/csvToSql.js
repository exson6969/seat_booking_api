const fs = require('fs');
const csv = require('csv-parser');
const db = require('../config/dbConfig');
require("dotenv").config()

function startCSVToSQL(data_file_path) {
  const schema = require(data_file_path);
  const dbName = process.env.DB_DATABASE;
  const tableName = schema.tableName;
  const filePath = schema.csvFilePath;

  db.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }

    db.query(`USE ${dbName}`, (err) => {
      if (err) {
        console.error('Error selecting database:', err);
        return;
      }

      const columnDefinitions = schema.columns
        .map((column) => `${column.name} ${column.datatype}`)
        .join(', ');

      db.query(`CREATE TABLE IF NOT EXISTS ${tableName} (${columnDefinitions})`, (err) => {
        if (err) {
          console.error('Error creating table:', err);
          return;
        }

        fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (row) => {
            const data = {};

            Object.keys(row).forEach((key) => {
              const column = schema.columns.find((col) => col.name === key);
              if (column) {
                data[key] = column.datatype === 'INT' ? parseInt(row[key]) : row[key];
              }
            });

            const query = DataQuery(tableName, schema.columns, data);

            db.query(query, Object.values(data), (err) => {
              if (err) {
                console.error('Error inserting data:', err);
              }
            });
          })
          .on('end', () => {
            console.log('CSV file successfully imported to the database.');
          });
      });
    });
  });
}

function DataQuery(tableName, columns, row) {
  const columnNames = columns.map((column) => column.name).join(', ');
  const placeholders = columns.map(() => '?').join(', ');
  const values = columns.map((column) => {
    const value = row[column.name];
    return value;
  });

  return `INSERT INTO ${tableName} (${columnNames}) VALUES (${placeholders})`;
}

module.exports = startCSVToSQL;