// The MIT License (MIT)
// Copyright (c) little-helper contributors.

var async = require("async"),
    exec = require("child_process").exec;

module.exports = {
  exec: function (commands) {
    async.eachSeries(commands, exec, function (error) {
      error && console.error(error.message);
    });
  }
}