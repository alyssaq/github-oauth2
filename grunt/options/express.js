module.exports = function (grunt) {
  return {
    development: {
      options: {
        server: 'server.js',
        port: 3000,
        open: true
      }
    }
  };
};
