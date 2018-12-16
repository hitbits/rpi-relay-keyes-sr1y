'use strict'

// johnny-five and raspi-IO module dependencies
const five  = require('johnny-five')
const raspi = require('raspi-io')

// create a raspberry pi board instance
const board = new five.Board({
  io: new raspi()
})

// create a relay instance
const relay = new five.Relay({
  type: 'NO',
  pin: 'GPIO4'
})
