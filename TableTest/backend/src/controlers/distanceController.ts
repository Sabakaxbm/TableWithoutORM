import {pool} from "../db";

const ApiError = require('../error/ApiError')
import express = require('express');
import {QueryResult} from "pg";
import {distanceSchema} from "../schema/distanceSchema";
import {createInsert} from "../services/dbMethods";
const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const table = 'distance'

class DistanceController {
    async get(req:express.Request, res:express.Response, next: any) {
        const sql = `SELECT * FROM ${table}`
        const data = await pool
            .query(sql)
            .then((res: QueryResult) => res.rows)

        res.json(data);
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
