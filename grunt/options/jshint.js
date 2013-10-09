module.exports = function (grunt) {
  return {
    build: {
      jshintrc: '.jshintrc',
      src: [
        'package.json',
        'Gruntfile.js',
        'grunt/**/*.js'
      ]
    },
    app: {
      jshintrc: '.jshintrc',
      src: [
        'server.js',
        'routes/*.js'
      ]
    }
  };
};
