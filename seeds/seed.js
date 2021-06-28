require('dotenv').config();
const seedUser = require('./userData');
const seedAssignment = require('./assignmentData');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedAssignment();

  process.exit(0);
};

seedAll();
