var Cylon = require('cylon');

// tell the HTTP API plugin to listen for requests at https://localhost:4000
Cylon.api("http", { port: 4000 });

var bots = [
  { port: '/dev/rfcomm0', name: 'Thelma' },
  { port: '/dev/rfcomm1', name: 'Louise' }
];

bots.forEach(function(bot) {
  Cylon.robot({
    name: bot.name,

    connections: {
      sphero: { adaptor: "sphero", port: bot.port }
    },

    devices: {
      sphero: { driver: "sphero" }
    },

    work: function(my) {
      every((1).second(), function() {
        console.log(my.name);
        my.sphero.setRandomColor();
        my.sphero.roll(60, Math.floor(Math.random() * 360));
      });
    }
  });
});

// start up all robots at once
Cylon.start();