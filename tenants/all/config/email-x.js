const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://pmmi.serve.email-x.parameter1.com');

config
  .setAdUnits('replace-me', [
    {
      name: 'ad-slot-1',
      id: 'replace-me',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
