const { connect, connection } = require('mongoose');

connect('mongodb+srv://jasminf2202:ytJQpoY3GepfIvUx@snapi1.vptsqua.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;