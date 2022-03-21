const router = require('express').Router();
const {
  getBoard
} = require('../controllers/homeController');

// /api/users
router.route('/').get(getBoard);

module.exports = router;