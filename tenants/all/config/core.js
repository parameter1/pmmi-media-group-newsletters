const brands = require('./brands');
const emailX = require('./email-x');

const config = {
  emailX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'aw-news-insights': {
    name: 'Automation News Insights',
    description: 'What\'s trending in the world of automation technology',
    ...brands.aw,
  },
  'pfw-joyces-voice': {
    name: 'Editors\' Picks',
    description: 'Innovation and Technology for Global Food & Beverage Processing',
    ...brands.pfw,
  },
  'pw-editors-picks': {
    name: 'Editors\' Picks',
    description: 'Timely hand-picked favorites from <em>Packaging World</em>',
    ...brands.pw,
  },
};

module.exports = config;
