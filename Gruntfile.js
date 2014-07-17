module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    paths: {
      index: '.'
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
        tasks: ['browserify:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify:dev', 'connect', 'watch']);
};
