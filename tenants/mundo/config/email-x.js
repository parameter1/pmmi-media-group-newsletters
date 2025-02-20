const EmailXConfiguration = require('@mindful-web/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://delivery.mindfulcms.com/pmmi/default/compat/email-banner');

config
  .setAdUnits('mundo-expo-pack', [
    {
      name: 'bottom-audience-banner',
      id: '677d8c5b10af05b6c6f4ac95',
      width: 560,
      height: 127,
    },
  ]);

module.exports = config;
