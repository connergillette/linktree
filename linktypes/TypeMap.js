'use strict'

const ClassicLinkType = require('./ClassicLinkType')
const MusicLinkType = require('./MusicLinkType')
const ShowListLinkType = require('./ShowListLinkType')

module.exports = {
  'classic': ClassicLinkType,
  'music': MusicLinkType,
  'showlist': ShowListLinkType
}