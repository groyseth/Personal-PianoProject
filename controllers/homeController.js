
module.exports = {
    getBoard(req, res) {
      
        // .then((users) => res.json(users))
        
          res.render('homePage', {
            //  loggedIn: req.session.loggedIn, 
            })
        // .catch((err) => res.status(500).json(err));
    },
    // getSingleUser(req, res) {
    //   User.findOne({ _id: req.params.userId })
    //     .select('-__v')
    //     .then((user) =>
    //       !user
    //         ? res.status(404).json({ message: 'No user with that ID' })
    //         : res.json(user)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },
    // // create a new user
    // createUser(req, res) {
    //   User.create(req.body)
    //     .then((dbUserData) => res.json(dbUserData))
    //     .catch((err) => res.status(500).json(err));
    // },
  };