import {pool} from "../db";
import {QueryResult} from "pg";
import * as pgPromise from "pg-promise";
import QueryResultError = pgPromise.errors.QueryResultError;

type dataProps = {
    [propName: string]: any
}

export const createInsert = async (data: dataProps, table: string) => {

    const obj: {keys: any[], values: any[]} = {
        keys: [],
        values: []
    }

    for (const [key, value] of Object.entries(data)) {
        obj.keys.push(key)
        obj.values.push(`'${value}'`)
    }

    const sql = `INSERT INTO ${table}(${obj.keys.join()}) VALUES (${obj.values}) returning *`

    return await pool.query(sql)
        .then((res:QueryResult) => res.rows)
        .catch((err: QueryResultError) =>
            console.log(err)
        )
}
