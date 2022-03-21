const router = require('express').Router();
const homeRoute = require('./homeRoute')


router.use('/', homeRoute);


router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;