const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://delivery.mindfulcms.com/pmmi/default/compat/email-banner');

config
  .setAdUnits('mundo-perspectivas', [
    {
      name: 'bottom-audience-banner',
      id: '60c2058f4a5b9888cba45cc6',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('mundo-expo-pack', [
    {
      name: 'bottom-audience-banner',
      id: '65565447fb8ee363cb1d1c3b',
      width: 560,
      height: 127,
    },
  ]);

module.exports = config;
