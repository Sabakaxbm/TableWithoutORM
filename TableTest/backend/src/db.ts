import {createTablesSchema} from "./services/dbService";
import {tableRows} from "./schema/distanceSchema";
require('dotenv').config()

const { Pool, Client } = require('pg')

const PostgreSQLConfig = {
    user: process.env.POSTGRESQL_USER,
    host: process.env.POSTGRESQL_HOST,
    database: process.env.POSTGRESQL_DATABASE,
    password: process.env.POSTGRESQL_PASSWORD,
    port: Number(process.env.POSTGRESQL_PORT),
}

export const pool = new Pool({
   ...PostgreSQLConfig
})

export const client = new Client({
    ...PostgreSQLConfig
})


// check Schema and create Table
void createTablesSchema('distance', tableRows)
