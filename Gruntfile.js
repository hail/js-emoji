module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        ASCIIOnly: true
      },
      build: {
        src: 'lib/emoji.js',
        dest: 'lib/emoji.min.js'
      }
    },
    shell: {
      compile: {
        command: 'php build/build.php > lib/emoji.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell:compile', 'uglify']);

};
