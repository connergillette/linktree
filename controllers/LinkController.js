'use strict'

const ClassicLink = require('../models/ClassicLink')
const Link = require('../models/Link')
const User = require('../models/User')

const TypeMap = require('../linktypes/TypeMap')
const RootLinkType = require('../linktypes/RootLinkType')

module.exports = {
  createLink: async (req, res) => {
    try {
      let rootLink = await RootLinkType.create(req.body)
      res.send(await TypeMap[req.params.type].create(rootLink, req.body))
    } catch (e) {
      res.status(401).send(e.message)
    }
  }
}