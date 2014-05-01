// The MIT License (MIT)
// Copyright (c) little-helper contributors.

module.exports = function( grunt ) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),

    jshint: {
      options: {
        esnext: true,
        indent: 2,
        expr: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        newcap: true,
        unused: true,
        trailing: true,
        browser: true,
        node: true
      },
      files: [
        "lib/*",
        "bin/*"
      ]
    },

    jsonlint: {
      mappings: {
        src: [ "assets/mappings/*" ]
      }
    },

    bump: {
      options: {
        files: [ "package.json" ],
        updateConfigs: [],
        commit: true,
        commitMessage: "Release v%VERSION%",
        commitFiles: [ "package.json" ],
        createTag: true,
        tagName: "v%VERSION%",
        tagMessage: "Version %VERSION%",
        push: true,
        pushTo: "git@github.com:RickEyre/little-helper.git",
      }
    }

  });

  grunt.loadNpmTasks( "grunt-contrib-jshint" );
  grunt.loadNpmTasks( "grunt-jsonlint" );
  grunt.loadNpmTasks( "grunt-bump" );

  grunt.registerTask( "default", [ "jshint", "jsonlint" ]);
};
