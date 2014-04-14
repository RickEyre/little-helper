// The MIT License (MIT)
// Copyright (c) little-helper contributors.

var async = require("async"),
    exec = require("child_process").exec;

function execute(command, next) {
  exec(command, function(error, stdout, stderr) {
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
  }
};
