const build = async () => {
  const { Puppy, sequelize } = require('./db/models');
  try {
    /* ====================== STEP 1 ====================== */
    // Using `build` and `save`, insert a record into the Puppies table with the
    // following attributes:
    // name: Trudy
    // ageYrs: 2
    // weightLbs: 38
    // breed: Brittany Spaniel
    // microchipped: false
    // Your code here
    // await sequelize.authenticate();
    // console.log("Connection to database established");

    // const newpuppies = await Puppy.build(
    //   {
    //     name: 'Trudy',
    //     ageYrs: 2,
    //     weightLbs: 38,
    //     breed: 'Brittany Spaniel',
    //     microchipped: false
    //   },
    //   { fields: ['name', 'ageYrs', 'weightLbs', 'breed', 'microchipped']}
    // );

    // await newpuppies.save();

  } catch (err) {
    throw err;
  }

};

const create = async () => {
  const { Puppy, sequelize } = require('./db/models');
  try {
    /* ====================== STEP 2 ====================== */
    // Using `create`, insert a record into the Puppies table with the following
    // attributes:
    // name: Beans
    // ageYrs: 1.6
    // weightLbs: 42
    // breed: Bulldog
    // microchipped: true
    // Your code here
    await sequelize.authenticate();

    const newPuppies = await Puppy.create(
      {
        name: 'Beans',
        ageYrs: 1.6,
        weightLbs: 42,
        breed: 'Bulldog',
        microchipped: true
      },
      { fields: ['name', 'ageYrs', 'weightLbs', 'breed', 'microchipped']}
    )


  } catch (err) {
    throw err;
  }
};

if (require.main === module) {
  require('dotenv').config();
  const { resetDB, seedAllDB } = require('./test/utils/test-utils');
  (async () => {
    await resetDB("db/dev.db");
    await seedAllDB("db/dev.db");
    try {
      await build();
    } catch(err) {
      console.error('There was an error thrown while building:');
      console.error(err);
    }
    try {
      await create();
    } catch(err) {
      console.error('There was an error thrown while creating:');
      console.error(err);
    }
  })();
} else {
  module.exports = { build, create };
}