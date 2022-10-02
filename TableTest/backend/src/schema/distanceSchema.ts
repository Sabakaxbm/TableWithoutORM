import {tableRowsProps} from "../services/dbService";


export const tableRows: tableRowsProps = {
    date: {
        type: "VARCHAR",
        null: '',
    },
    name: {
        type: "VARCHAR",
        null: '',
    },
    amount: {
        type: "INTEGER",
        null: '',
    },
    distance: {
        type: "INTEGER",
        null: '',
    },
}

export const distanceSchema = {
    type: "object",
    properties: {
        date: {type: "integer"},
        name: {type: "string"},
        amount: {type: "integer"},
        distance: {type: "integer"}
    },
    required: ["date", "name", "amount", "distance"],
    additionalProperties: false
}
