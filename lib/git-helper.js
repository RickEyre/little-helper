// The MIT License (MIT)
// Copyright (c) little-helper contributors.

var helper = require("./helper"),
    minimist = require("minimist"),
    _ = require("lodash"),
    CommandMapper = require("command-mapper"),
    path = require("path"),
    mappingsPath = "../assets/mappings/git.mappings.json";

module.exports = function(input) {
  var cmd = CommandMapper.map(path.resolve(__dirname, mappingsPath), input,
                              { asArray: true });
  if (!_.isEmpty(cmd)) {
    return helper.spawn(cmd);
  }
  input = minimist(input);
  if (input.u) {
    var upstream = input.upstream || (input.o && "origin") || "upstream";
    return helper.spawnSeries([
      [ "git", "fetch", upstream, "master" ],
      [ "git", "rebase", "-i", upstream + "/master" ]
    ]);
  }
};
