// The MIT License (MIT)
// Copyright (c) little-helper contributors.

var async = require("async"),
    cp = require("child_process");

function spawn(command, next) {
  cp.spawn(command.shift(), command, { stdio: "inherit" }).on("close", function() {
    next && next();
  });
}

function execute(command, next) {
  cp.exec(command, function(error, stdout, stderr) {
    if (error) {
      return next(error);
    }
    stderr && console.error(stderr);
    stdout && console.log(stdout);
    next();
  });
}

module.exports = {
  exec: function (commands) {
    async.eachSeries(commands, execute, function (error) {
      error && console.error(error.message);
    });
  },
  spawn: spawn,
  spawnSeries: function(commands) {
    async.eachSeries(commands, spawn, function(error) {
      error && console.error(error.message);
    });
  }
};
