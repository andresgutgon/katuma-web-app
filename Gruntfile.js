module.exports = function (grunt) {
  var config
    , growl = require('growl');

  config = {
    index_path: '.'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    paths: {
      index: config.index_path
    },
    browserify: {
      bundleOptions: {
        debug: true // Source Maps
      },
      dev: {
        files: {
          '<%= paths.index %>/js/bundle.js': ['<%= paths.index %>/js/app.js'],
        },
        options: {
          transform: ['reactify'],
          alias: [
            './js/enviroments/development.js:env'
          ]
        }
      },
      prod: {
        files: {
          '<%= paths.index %>/js/bundle.min.js': ['<%= paths.index %>/js/app.js'],
        },
        options: {
          transform: ['reactify'],
          alias: [
            './js/enviroments/production.js:env'
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '<%= paths.index %>'
        }
      }
    },
    watch: {
      options: {
        spawn: false
      },
      dev: {
        files: [
          '<%= paths.index %>/js/**/*.js',
          '<%= paths.index %>/locales/**/*.js'
        ],
        // TODO: try watchify instead of this watch:
        // https://gist.github.com/WickyNilliams/d0fd94d84ac27feb93fe
        tasks: ['browserify:dev', 'ready']
      }
    },
  });

  grunt.registerTask('ready', function () {
    growl('Ready to rumble!', {title: 'Katuma!', image: 'Console'});
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['browserify:dev', 'ready', 'watch']);
};
