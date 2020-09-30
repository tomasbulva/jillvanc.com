
module.exports = function (grunt) {

  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'public/style.css': 'sass/style.sass',       // 'destination': 'source'
        }
      }
    },
    watch: {
      sass: {
        files: '{,**/}*.{scss,sass}',
        tasks: ['sass', 'cssmin'],
        options: {
          livereload: true,
        },
      },
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/style.min.css': 'public/style.css'
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
  grunt.registerTask('css', ['sass', 'cssmin']);

};
