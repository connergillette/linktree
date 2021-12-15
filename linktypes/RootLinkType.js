'use strict'

const User = require('../models/User')
const Link = require('../models/Link')
const ClassicLink = require('../models/ClassicLink')

module.exports = {
  create: async (data) => {
    try {
      let user = await User.findOne({ username: data.username })

      let createdRootLink = new Link({
        user: user,
        title: data.title
      })

      return createdRootLink
    } catch (e) {
      throw new Error(`Could not create link: ${e.message}`)
    }
  }
}