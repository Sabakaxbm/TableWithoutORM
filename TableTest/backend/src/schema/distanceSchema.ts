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
        type: "VARCHAR",
        null: '',
    },
    distance: {
        type: "VARCHAR",
        null: '',
    },
}

export const distanceSchema = {
    type: "object",
    properties: {
        date: {type: "string"},
        name: {type: "string"},
        amount: {type: "integer"},
        distance: {type: "integer"}
    },
    required: ["date", "name", "amount", "distance"],
    additionalProperties: false
}
