const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://All_users_25:test@cluster0.mjn0g.mongodb.net/Multipage?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
