const router = require('express').Router();
// const apiRoutes = require('./api');
const homeRoute = require('./homeRoute')

// router.use('/api', apiRoutes);
router.use('/', homeRoute);


router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;