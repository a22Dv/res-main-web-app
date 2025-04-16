import sqlite3 from 'sqlite3';
import { readFile } from 'fs';

const dbFile = 'database.db';
const sqlFile = 'init.sql';
const sqlite = sqlite3;

const db = new sqlite.Database(dbFile, (err) => {
    if (err) {
        console.error('Error opening database: ', err.message);
        return;
    }
    console.log('Connected to database.');
    readFile(sqlFile, (err, sql) => {
        if (err) {
            console.error('Error reading SQL file: ', err.message);
            close();
            return;
        }
        db.exec(sql.toString(), (err) => {
            if (err) {
                console.error('Initialization failed: ', err.message)
            } else {
                console.log('Operation completed successfully.')
            }
            db.close()
        });
    });
});