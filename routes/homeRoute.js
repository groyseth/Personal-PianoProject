// const { sign } = require('crypto');

const router = require('express').Router();
const {
  getBoard,
  signUp,
  logIn
  
} = require('../controllers');

// /api/users
router.route('/').get(getBoard);

router.route('/signup').get(signUp);

router.route('/login').get(logIn);
// /api/users/:userId
// router.route('/:userId').get(getSingleUser);

module.exports = router;