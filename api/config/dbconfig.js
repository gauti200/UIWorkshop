require('dotenv').config()


const harperive = require('harperive');

// defining the haperive configuration
const DB_CONFIG = {
    harperHost: process.env.HOST,
    token: process.env.TOKEN,
    schema: process.env.SCHEMA
}
const Client = harperive.Client;
const db = new Client(DB_CONFIG);

module.exports = db;