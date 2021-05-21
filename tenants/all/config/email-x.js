const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://pmmi.serve.email-x.parameter1.com');

config
  .setAdUnits('aw-automation-skills', [
    {
      name: 'bottom-audience-banner',
      id: '6092909bb1fcca030a1ba572',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aw-continuous-processing', [
    {
      name: 'bottom-audience-banner',
      id: '609292b0b1fcca6e1d1ba5c6',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aw-factory-automation', [
    {
      name: 'bottom-audience-banner',
      id: '609293a4b1fcca5d5b1ba621',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aw-food-bev-pharma', [
    {
      name: 'bottom-audience-banner',
      id: '6092947db1fcca78741ba675',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aw-key-insights', [
    {
      name: 'bottom-audience-banner',
      id: '609294beb1fcca15fc1ba688',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aw-news-insights', [
    {
      name: 'bottom-audience-banner',
      id: '60929591932e218173802e85',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aw-product-insights', [
    {
      name: 'bottom-audience-banner',
      id: '609295efb1fcca56341ba6db',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aw-system-integrators', [
    {
      name: 'bottom-audience-banner',
      id: '60a7c175b1fcca41a11bad12',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('hcp-logistics-life-sciences', [
    {
      name: 'bottom-audience-banner',
      id: '6092965a932e210119802ef3',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('hcp-newsbrief', [
    {
      name: 'bottom-audience-banner',
      id: '609296c4932e21aa13802f34',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('hcp-serialization-countdown', [
    {
      name: 'bottom-audience-banner',
      id: '60929739b1fccac95c1ba807',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('hcp-quick-hits', [
    {
      name: 'bottom-audience-banner',
      id: '60929790932e212620803005',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('oem-shop-talk', [
    {
      name: 'bottom-audience-banner',
      id: '609297fa932e21250b80303d',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pfw-joyces-voice', [
    {
      name: 'bottom-audience-banner',
      id: '6092988cb1fcca6b491ba899',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-contract-packaging', [
    {
      name: 'bottom-audience-banner',
      id: '6092992d932e2139a08030d8',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-editors-picks', [
    {
      name: 'bottom-audience-banner',
      id: '600dacd9b1fcca1d311ba4e5',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-end-of-line-strategies', [
    {
      name: 'bottom-audience-banner',
      id: '609299f5932e214266803110',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-packaging-insights', [
    {
      name: 'bottom-audience-banner',
      id: '60929a70b1fccac9061ba996',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-shelf-impact', [
    {
      name: 'bottom-audience-banner',
      id: '60929ac2932e2103298031b6',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-machine-automation-insights', [
    {
      name: 'bottom-audience-banner',
      id: '60929b1c932e21866b80322e',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-new-issue-alert', [
    {
      name: 'bottom-audience-banner',
      id: '60929b92b1fcca34a91baadf',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('pw-new-machinery', [
    {
      name: 'bottom-audience-banner',
      id: '60929bca932e2176288032e2',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
