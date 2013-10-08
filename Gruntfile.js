module.exports = function (grunt) {
  require('load-grunt-config')(grunt, {
  configPath: 'grunt/options',
  config: {
      base: grunt.option('base') || process.cwd(),
    }
  });

  grunt.loadTasks('grunt/tasks');
};
