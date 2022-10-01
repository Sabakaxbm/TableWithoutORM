import {createTablesSchema} from "./services/dbService";
import {tableRows} from "./schema/distanceSchema";

const { Pool, Client } = require('pg')

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "admin",
    port: 5432,
})

export const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'admin',
    port: 5432,
})


// check Schema and create Table
void createTablesSchema('distance', tableRows)
