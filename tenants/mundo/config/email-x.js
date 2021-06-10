const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://pmmi.serve.email-x.parameter1.com');

config
  .setAdUnits('mundo-perspectivas', [
    {
      name: 'bottom-audience-banner',
      id: '60c2058f4a5b9888cba45cc6',
      width: 560,
      height: 127,
    },
  ]);

module.exports = config;
