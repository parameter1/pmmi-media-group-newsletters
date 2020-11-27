const brands = require('./brands');
const emailX = require('./email-x');

const config = {
  emailX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'pw-editors-picks': {
    name: 'Editors\' Picks',
    description: 'Timely hand-picked favorites from <em>Packaging World</em>',
    ...brands.pw,
  },
};

module.exports = config;
