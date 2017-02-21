const db = require('./models');
const seedFunction = require('./seeds');

db.sequelize.sync({ force: true }).then(() => {
  seedFunction();
});
