'use strict'

const mongoose = require('mongoose')

const ClassicLink = require('../models/ClassicLink')
const Link = require('../models/Link')
const User = require('../models/User')

const TypeMap = require('../linktypes/TypeMap')
const RootLinkType = require('../linktypes/RootLinkType')

module.exports = {
  // TODO: Implement better error handling / validation
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
  // TODO: Add validation messages for userId / sort
  getLinks: async (req, res) => {
    let userId = req.query.userId
    let dateCreatedSort = req.query.dateCreated ? req.query.dateCreated : 'desc'
    res.send(
      await Link.find({user: (await User.findById(userId))}).sort({dateCreated: dateCreatedSort}).populate('sublink')
    )
  }
}