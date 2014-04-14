// The MIT License (MIT)
// Copyright (c) little-helper contributors.

var helper = require("./helper");

module.exports = function(options) {
  if (options.u) {
    var upstream = options.upstream || (options.o && "origin") || "upstream";
    return helper.exec([
      "git fetch " + upstream + " master",
      "git rebase " + upstream + "/master"
    ]);
  }
};
