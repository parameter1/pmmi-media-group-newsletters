const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://pmmi.serve.email-x.parameter1.com');

config
  .setAdUnits('pw-editors-picks', [
    {
      name: 'bottom-audience-banner',
      id: '600dacd9b1fcca1d311ba4e5',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
