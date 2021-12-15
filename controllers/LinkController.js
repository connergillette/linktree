'use strict'

const ClassicLink = require('../models/ClassicLink')
const Link = require('../models/Link')
const User = require('../models/User')

module.exports = {
  createLink: async (req, res) => {
    let user = await User.findOne(req.body.user)

    let createdRootLink = new Link({
      user: user,
      title: 'Classic Link'
    })

    createdRootLink.save()

    let createdLink = new ClassicLink({
      linkDestination: 'https://linkedin.com/in/connergillette',
      rootLink: createdRootLink
    })

    createdLink.save()

    res.send()
  }
}