'use strict'

const User = require('../models/User')
const Link = require('../models/Link')
const ClassicLink = require('../models/ClassicLink')

module.exports = {
  ref: 'ClassicLink',
  create: async (data) => {
    try {
      return await new ClassicLink({
        linkDestination: data.linkDestination,
      })
    } catch (e) {
      throw new Error(`Could not create link: ${e.message}`)
    }
  }
}