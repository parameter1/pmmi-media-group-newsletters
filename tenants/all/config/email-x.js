const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://pmmi.serve.email-x.parameter1.com');

config

  .setAdUnits('hcp-serialization-countdown-new', [
    {
      name: 'bottom-audience-banner',
      id: '625ed4056e4c9e529c3e7914',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('hcp-quick-hits-new', [
    {
      name: 'bottom-audience-banner',
      id: '6245fa366e4c9e5aff3e7525',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('oem-insights', [
    {
      name: 'bottom-audience-banner',
      id: '60af9b0b72cf091c5e281ff6',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-contract-packaging', [
    {
      name: 'bottom-audience-banner',
      id: '6092992d932e2139a08030d8',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-editors-picks', [
    {
      name: 'bottom-audience-banner',
      id: '600dacd9b1fcca1d311ba4e5',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-end-of-line-strategies', [
    {
      name: 'bottom-audience-banner',
      id: '609299f5932e214266803110',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-packaging-insights', [
    {
      name: 'bottom-audience-banner',
      id: '60929a70b1fccac9061ba996',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-shelf-impact', [
    {
      name: 'bottom-audience-banner',
      id: '60929ac2932e2103298031b6',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-machine-automation-insights', [
    {
      name: 'bottom-audience-banner',
      id: '60929b1c932e21866b80322e',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-new-issue-alert', [
    {
      name: 'bottom-audience-banner',
      id: '60929b92b1fcca34a91baadf',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-new-machinery', [
    {
      name: 'bottom-audience-banner',
      id: '60929bca932e2176288032e2',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pfw-new-issue-alert', [
    {
      name: 'bottom-audience-banner',
      id: '622f3e3d394283ab9ef780e4',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pfw-hand-picked', [
    {
      name: 'bottom-audience-banner',
      id: '622f3e1d394283b2e8f780d1',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('cpgnext', [
    {
      name: 'bottom-audience-banner',
      id: '652044d0fb8ee312171d1854',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-weekly', [
    {
      name: 'bottom-audience-banner',
      id: '65522348fb8ee383e51d19c1',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pw-daily', [
    {
      name: 'bottom-audience-banner',
      id: '6554c8b2fb8ee379411d1a6a',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pfw-daily', [
    {
      name: 'bottom-audience-banner',
      id: '6555171dfb8ee31c201d1b1e',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('oem-daily', [
    {
      name: 'bottom-audience-banner',
      id: '65563dfe32f5063de47a8aea',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('hcp-daily', [
    {
      name: 'bottom-audience-banner',
      id: '65563efefb8ee325eb1d1c03',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('cmp-daily', [
    {
      name: 'bottom-audience-banner',
      id: '65776e28fb8ee314971d203b',
      width: 560,
      height: 127,
    },
  ]);

module.exports = config;
