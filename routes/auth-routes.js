const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
})

// auth with spotify
router.get('/spotify', passport.authenticate('spotify', {
   scope: ['user-read-email', 'user-read-private'], 
  })
);

// router.get('/spotify/redirect', passport.authenticate('spotify'), (req, res) => {
//   res.send('you reached the callback');
// });

module.exports = router;

router.get(
  '/spotify/redirect',
  passport.authenticate('spotify', {failureRedirect: '/login'}),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);