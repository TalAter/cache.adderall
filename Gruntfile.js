module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    eslint: {
      all: [
        "src/cache.adderall.js",
        "Gruntfile.js"
      ]
    },
    browserify: {
      standalone: {
        src: [ "src/cache.adderall.js" ],
        dest: "dist/cache.adderall.js",
        options: {
          transform: [
            [ "babelify", {presets: ["es2015"]} ]
          ],
          plugin: [
            [ "minifyify", { output: "dist/cache.adderall.js.map", map: "cache.adderall.js.map" } ],
            [ "browserify-header" ]
          ],
          browserifyOptions: {
            standalone: "adderall",
            debug: true
          }
        }
      }
    },
    markdox: {
      target: {
        files: [
          {src: "src/cache.adderall.js", dest: "docs/README.md"}
        ]
      }
    },
    watch: {
      files: ["src/cache.adderall.js", "!**/node_modules/**"],
      tasks: ["default"]
    },
    connect: {
      devel: {
        options: {
          protocol: "http",
          port: 1919,
          hostname: "*",
          base: ".",
          open: "http://localhost:1919/demo"
        }
      }
    }
  });

  // Load NPM Tasks
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-markdox");

  // Register tasks.
  grunt.registerTask("default", ["eslint", "browserify", "markdox"]);
  grunt.registerTask("test", ["eslint"]);
  grunt.registerTask("serve", ["default", "connect:devel", "watch"]);

};
