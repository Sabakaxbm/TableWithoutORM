const ApiError = require('../error/ApiError')
import express = require('express');

module.exports = function (err: any, req:express.Request, res:express.Response , next: any) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: 'Непредвиденная ошибка!'})
}
