module.exports = function (grunt) {
  grunt.registerTask('default', ["express:development", "jshint", "watch"]);
};
