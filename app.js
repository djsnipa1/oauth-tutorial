const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();

// variables
const port = 3000;

// set up routes
app.use('/auth', authRoutes);

// set up view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log(`app now listening on port ${port}`);
})

