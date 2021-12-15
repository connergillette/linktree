'use strict'

const User = require('../models/User')
const Link = require('../models/Link')
const ClassicLink = require('../models/ClassicLink')

module.exports = {
  create: async (rootLink, data) => {
    try {
      return await new ClassicLink({
        linkDestination: data.linkDestination,
        rootLink: rootLink
      })
    } catch (e) {
      throw new Error(`Could not create link: ${e.message}`)
    }
  }
}