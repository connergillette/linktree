'use strict'

const User = require('../models/User')
const Link = require('../models/Link')
const ClassicLink = require('../models/ClassicLink')

module.exports = {
  create: async (data, createdLink, linkType) => {
    try {
      let user = await User.findOne({ username: data.username })

      return await new Link({
        user: user,
        title: data.title,
        sublink: createdLink,
        sublinkType: linkType
      }).save()
    } catch (e) {
      throw new Error(`Could not create link: ${e.message}`)
    }
  }
}