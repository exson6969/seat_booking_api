const startCSVToSQL = require('./utils/csvToSql');

const data_file_path = "../schema/Seats.json";
// Start the CSV to SQL conversion
startCSVToSQL(data_file_path);