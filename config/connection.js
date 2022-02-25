const { connect, connection } = require('mongoose');

connect(process.env.MONGODB_URI||'mongodb://localhost/pianoPage', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
