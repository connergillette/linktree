'use strict'

const mongoose = require('mongoose')

const ClassicLink = require('../models/ClassicLink')
const Link = require('../models/Link')
const User = require('../models/User')

const TypeMap = require('../linktypes/TypeMap')
const RootLinkType = require('../linktypes/RootLinkType')

module.exports = {
  createLink: async (req, res) => {
    try {
      let linkType = TypeMap[req.params.type]
      let createdLink = await linkType.create(req.body)
      let rootLink = await RootLinkType.create(req.body, createdLink, linkType.ref)
      res.send(rootLink)
    } catch (e) {
      res.status(401).send(e.message)
    }
  },
  getLinks: async (req, res) => {
    res.send(
      await Link.find({user: (await User.findById(req.query.userId))}).sort({dateCreated: 'asc'}).populate('sublink')
    )
  }
}