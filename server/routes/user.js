const express = require("express")
const route = express.Router()
const userdata = require("../module/user-module")
const bcrypt = require("bcryptjs")
const { validUser, hashPass } = require("../utility")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const secretKey = crypto.randomBytes(64).toString("hex")
let salt = 10;
route.post("/signup", async (req, res) => {
   if (await validUser(req.body.username)) {
      res.send(`${req.body.username} already exist!!!`)
   } else {
      await hashPass(req.body.password).then((hash) => {
         userdata.create({ username: req.body.username, phoneNumber: req.body.phoneNumber, password: hash })
         res.status(200).send(`${req.body.username} added successfully`)
      }).catch((err) => {
         res.status(400).send(err.message)
      })
   }
})


route.post("/login", (req, res) => {
   userdata.find({ username: req.body.username }).then((user) => {
      if (user.length) {
         bcrypt.compare(req.body.password, user[0].password).then((val) => {
            if (val) {
               const authToken = jwt.sign(user[0].username, secretKey)
               res.send({authToken})
            } else {
               res.send("invalid password")
            }
         })
      } else {
         res.send("invalid user")
      }
   })
})

module.exports = route