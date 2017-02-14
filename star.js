var cylon = require ('cylon');

const hostname = "Sky"

const starDrone = cylon.starDrone ({
  
  connection:{
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    led: { driver: 'led', pin: 13 }
  },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
});

starDrone.start();


console.log("units ready on ${hostname} ");

