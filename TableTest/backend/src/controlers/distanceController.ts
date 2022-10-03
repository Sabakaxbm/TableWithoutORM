import { pool} from "../db";

const ApiError = require('../error/ApiError')
import express = require('express');
import {QueryResult} from "pg";
import {distanceSchema} from "../schema/distanceSchema";
import {createInsert} from "../services/dbMethods";
const Ajv = require("ajv")
const ajv = new Ajv()

interface queryProps {
    page: number,
    size: number
}
const table = 'distance'

class DistanceController {
    async get(req:express.Request, res:express.Response) {

        const { page, size } = req.query as unknown as queryProps;

        const getPagination = (page: number = 1, size:number = 10) => {
            const offset = (page - 1) * size
            const limit = size
            return { offset, limit }
        }

        const {offset, limit} = getPagination(page, size)

        const sql = `SELECT * FROM ${table} OFFSET ${offset} LIMIT ${limit} `

        const sqlCount = `SELECT COUNT(*)  FROM ${table}`

        const count = await pool
            .query(sqlCount)
            .then((res: QueryResult) => res.rows)

        const countPages = (Math.ceil(count[0].count / limit))

        const data = await pool
            .query(sql)
            .then((res: QueryResult) => res.rows)

        res.json({countPages, data});
    }

    async create(req:express.Request, res:express.Response, next: any) {
        const data = req.body


        const validate = ajv.compile(distanceSchema)

        const valid = validate(data)

        if (!valid) {
            return next(ApiError.badRequest("Данные введены не верно!"))
        }

        const distance = await createInsert(data, table)
        res.json(distance)
    }
}

module.exports = new DistanceController()
