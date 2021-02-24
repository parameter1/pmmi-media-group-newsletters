const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'mundo-perspectivas': {
    name: 'Perspectivas',
    description: 'Inteligencia de mercados, tecnologías y tendencias',
    ...brands.mundo,
  },
};

module.exports = config;
