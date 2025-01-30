const EmailXConfiguration = require('@mindful-web/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://delivery.mindfulcms.com/pmmi/default/compat/email-banner');

config

  .setAdUnits('hcp-quick-hits', [
    {
      name: 'bottom-audience-banner',
      id: '6245fa366e4c9e5aff3e7525',
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
  ])
  .setAdUnits('pw-new-issue', [
    {
      name: 'bottom-audience-banner',
      id: '60929b92b1fcca34a91baadf',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('hcp-quick-hits-2024', [
    {
      name: 'bottom-audience-banner',
      id: '664cf9243b1e349533f8b900',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pmg-sustainable-packaging', [
    {
      name: 'bottom-audience-banner',
      id: '664e260d25edd934c87eaf96',
      width: 560,
      height: 127,
    },
  ]);

module.exports = config;
