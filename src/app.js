const express = require ("express")
const app = express()

//rotas
const index = require("express")

    app.use(express.json())

    app.use(function (req, res, next) {

        res.header("Access-Control-Allow-origin", "*")
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-with, Content-Type, Accept" )
            next()
    })

    app.use("/", index)
    module.exports = app
