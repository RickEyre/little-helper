// The MIT License (MIT)
// Copyright (c) little-helper contributors.

var helper = require("./helper"),
    minimist = require("minimist");

module.exports = function(input) {
  input = minimist(input);
  if (input.u) {
    var upstream = input.upstream || (input.o && "origin") || "upstream";
    return helper.spawnSeries([
      [ "git", "fetch", upstream, "master" ],
      [ "git", "rebase", "-i", upstream + "/master" ]
    ]);
  }
};
