'use strict'

const SongLocation = require('../models/SongLocation')
const MusicPlatform = require('../models/MusicPlatform')
const MusicLink = require('../models/MusicLink')

module.exports = {
  ref: 'MusicLink',
  create: async (data) => {
    try {
      let songDetails = {
        songName: data.songName,
        albumName: data.albumName,
        albumArtURL: data.albumArtURL,
        artistName: data.artistName,
      }
      
      let platformLinks = data.platformLinks

      let songLocations = []
      for (let alias of Object.keys(platformLinks)) {
        let platform = await MusicPlatform.findOne({alias: alias})
        if (platform === null) {
          throw new Error(`Could not find music platform alias: ${alias}`)
        }

        let platformLink = platformLinks[alias]

        let songLocation = await new SongLocation({
          linkDestination: platformLink.linkDestination,
          embedCode: platformLink.embedCode
        }).save()

        songLocations.push(songLocation)
      }

      return await new MusicLink({
        ...songDetails,
        songLocations: songLocations,
      }).save()
    } catch (e) {
      throw new Error(`Could not create link: ${e.message}`)
    }
  }
}