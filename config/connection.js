const { connect, connection } = require('mongoose');

connect('mongodb://localhost/pianoPage', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
