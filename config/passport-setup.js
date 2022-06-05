const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('./keys')

passport.use(
  new SpotifyStrategy({
  // options for the spotify strategy
    clientID: keys.spotify.clientID,
    clientSecret: keys.spotify.clientSecret,
    callbackURL: 'https://oauth-tutorial.djsnipa1.repl.co/auth/spotify/redirect'
  }, (accessToken, refreshToken, expires_in, profile, done) => {
      console.log(profile)
        // return done(err, user);
  })
);


// passport.use(
//   new SpotifyStrategy(
//     {
//       clientID: client_id,
//       clientSecret: client_secret,
//       callbackURL: 'http://localhost:8888/auth/spotify/callback',
//     },
//     function (accessToken, refreshToken, expires_in, profile, done) {
//       User.findOrCreate({spotifyId: profile.id}, function (err, user) {
//         return done(err, user);
//       });
//     }
//   )
// );