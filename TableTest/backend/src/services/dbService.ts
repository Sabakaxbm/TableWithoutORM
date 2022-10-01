import {pool} from "../db";
import {QueryResult} from "pg";
import * as pgPromise from "pg-promise";
import QueryResultError = pgPromise.errors.QueryResultError;

export type tableRowsProps = {
    [propName: string]: {
        type: 'VARCHAR' | 'INTEGER'
        null: 'NOT NULL' | ''
    },
}

export const createTablesSchema = async (tableName: string, props: tableRowsProps) => {
    const formatTableName = tableName.toLowerCase()
    if (await isTableCreate(formatTableName)) {
        return
    }
    const table = await createTables(formatTableName, props)
    console.log('Table Create:', table)
}

const isTableCreate = async (tableName: string): Promise<boolean> => {
    const sql = `SELECT EXISTS (SELECT typname FROM pg_type WHERE typname = '${tableName}')`
    return await pool.query(sql)
        .then((res: QueryResult) => res.rows[0].exists)
        .catch((err: QueryResultError) =>
            console.log(err)
        )
}

const createTables = async (tableName: string, props: tableRowsProps): Promise<string> => {
    const arr = []
    for (const [key, value] of Object.entries(props)) {
        arr.push(`${key} ${value.type} ${value.null}`)
    }
    const sql = `CREATE TABLE ${tableName} (Id SERIAL PRIMARY KEY,${arr.join()})`

    return await pool.query(sql)
        .then(() => sql)
        .catch((err: QueryResultError) =>
            console.log(err)
        )
}
