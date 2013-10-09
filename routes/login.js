// Set the client credentials and the OAuth2 server
var credentials = {
  clientID: '5d55f8b2c81b86fc413c',
  clientSecret: 'f816768d68ca421eef677743218db6e768bc93f688',
  site: 'https://github.com/login',
  tokenPath: '/oauth/access_token'
};

var express = require('express'),
    app = express();

var OAuth2 = require('simple-oauth2')(credentials);

// Authorization uri definition
var authorization_uri = OAuth2.AuthCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/done',
  scope: 'repo',
  state: '3(#0/!~'
});

// Initial page redirecting to Github
app.get('/auth', function (req, res) {
  console.log(OAuth2.Client.getToken(saveToken));
    res.redirect(authorization_uri);
});

// Callback service parsing the authorization token and asking for the access token
app.get('/callback', function (req, res) {
  var code = req.query.code; 
  console.log('/callback');
  OAuth2.AuthCode.getToken({
    code: code,
    redirect_uri: 'http://localhost:3000/callback'
  }, saveToken);

  function saveToken(error, result) {
    if (error) { console.log('Access Token Error', error.message); }
    token = OAuth2.AccessToken.create(result);
  }
});


function github(req, res) {
  res.redirect(authorization_uri);
}


module.exports = {
  github: github
};
