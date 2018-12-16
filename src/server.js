'use strict'

// johnny-five and raspi-IO module dependencies
const five  = require('johnny-five')
const raspi = require('raspi-io')


// CONSTANTS DECLARATIONS
// - Declaration of constants used throughout the code

// board
// - represents the raspberry-pi board itself
const board = new five.Board({
  io: new raspi()
})

// relay
// - represents the single digital relay attached to the raspberry-pi board
const relay = new five.Relay({
  type: 'NO',
  pin: 'GPIO4'
})


// EVENT LISTENERS
// - Defines the functions that are listening for the generated events.

// ready
// - Execute tasks that must take place before the program can operante after
//   the board instance object has completed any hardware initialization.
board.on('ready', () => {
  board.repl.inject({ relay })
})

// exit
// - Execute cleanup task before your program is 'disconnected' from the board
board.on('exit', () => {
  relay.off();
})
