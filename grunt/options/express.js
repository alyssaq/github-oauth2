module.exports = function (grunt) {
  return {
    development: {
      options: {
        bases: 'src',
        server: 'server.js',
        port: 3000,
        open: true,
        serverreload: true,
        livereload: true
      }
    }
  };
};
