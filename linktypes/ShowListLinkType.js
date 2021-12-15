'use strict'

const Show = require('../models/Show')
const ShowListLink = require('../models/ShowListLink')

module.exports = {
  ref: 'ShowListLink',
  create: async (data) => {
    try {
      let shows = []
      for (let showDetail of data.showDetails) {
        let show = await new Show({
          // TODO: Validate date format
          date: new Date(showDetail.date),
          venueName: showDetail.venueName,
          cityName: showDetail.cityName,
          linkDestination: showDetail.linkDestination,
          status: showDetail.status
        }).save()

        shows.push(show)
      }

      return await new ShowListLink({
        shows: shows,
      }).save()
    } catch (e) {
      throw new Error(`Could not create link: ${e.message}`)
    }
  }
}