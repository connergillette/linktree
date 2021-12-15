'use strict'

const User = require('../models/User')

module.exports = {
  registerUser: async (req, res) => {
    let requestData = req.body

    console.log(requestData)
    let registeredUser = new User(requestData)
    registeredUser.save()

    res.send()
  }
}