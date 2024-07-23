const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');
const User = require('./models/User');  // Adjust the path as needed
const Meter = require('./models/Meter');  // Adjust the path as needed

mongoose.connect('mongodb://localhost/smartwater', { useNewUrlParser: true, useUnifiedTopology: true });

const generateUsers = async (numUsers) => {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = await bcrypt.hash('password', 10);

    const newUser = new User({ username, email, password });
    await newUser.save();
    users.push(newUser);
  }

  return users;
};

const generateMeters = async (users) => {
  const meters = [];

  for (const user of users) {
    const identifier = faker.datatype.uuid();
    const balance = faker.finance.amount(0, 100, 2);

    const newMeter = new Meter({ identifier, customer: user._id, balance });
    await newMeter.save();
    meters.push(newMeter);
  }

  return meters;
};

const generateDummyData = async () => {
  await User.deleteMany({});
  await Meter.deleteMany({});

  const users = await generateUsers(150);
  await generateMeters(users);

  mongoose.connection.close();
};

generateDummyData().catch(err => console.error(err));
