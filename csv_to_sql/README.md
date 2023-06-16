# CSV to SQL Conversion Script

This script allows you to import data from a CSV file into a MySQL database. It reads the CSV file, creates a table based on a JSON schema, and inserts the CSV data into the table.

## Prerequisites

Before running the script, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/en/) if you haven't already.
- MySQL: Install MySQL and set up your database server.

## Getting Started

1. Clone this repository or download the script files to your local machine.

2. Install the required dependencies in package.json

3. Set up the database connection by updating the environment variables in the .env file. Provide the necessary details such as the database host, username, password, **database name**, and port.

4. Define the schema for your table in the **schema** directory. Specify the table name, csv file path, column names, data types, primary keys, and whether they are nullable.

5. Add schema json file path in index.js replacing constant `data_file_path`.

6. Run the script using the following command:

```
node .\index.js
```
7. Once the process is complete, you will see a success message indicating that the CSV file has been successfully imported into the database.

## Customize the Schema
if you want to import data from a different CSV file or modify the table schema, you can customize the `schema/template.json` file. Update the table name, csv file path, column names, data types, and other attributes as per your requirements.