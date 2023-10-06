const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://pmmi.serve.email-x.parameter1.com');

config
  .setAdUnits('aw-automation-skills', [
    {
      name: 'bottom-audience-banner',
      id: '6092909bb1fcca030a1ba572',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('aw-continuous-processing', [
    {
      name: 'bottom-audience-banner',
      id: '609292b0b1fcca6e1d1ba5c6',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('aw-process-automation', [
    {
      name: 'bottom-audience-banner',
      id: '609292b0b1fcca6e1d1ba5c6',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('aw-factory-automation', [
    {
      name: 'bottom-audience-banner',
      id: '609293a4b1fcca5d5b1ba621',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('aw-food-bev-pharma', [
    {
      name: 'bottom-audience-banner',
      id: '6092947db1fcca78741ba675',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('aw-key-insights', [
    {
      name: 'bottom-audience-banner',
      id: '609294beb1fcca15fc1ba688',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('aw-news-insights', [
    {
      name: 'bottom-audience-banner',
      id: '60929591932e218173802e85',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('aw-product-insights', [
    {
      name: 'bottom-audience-banner',
      id: '609295efb1fcca56341ba6db',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('aw-system-integrators', [
    {
      name: 'bottom-audience-banner',
      id: '60a7c175b1fcca41a11bad12',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('hcp-logistics-life-sciences', [
    {
      name: 'bottom-audience-banner',
      id: '6092965a932e210119802ef3',
      width: 768,
      height: 100,
    },
  ])
  .setAdUnits('hcp-logistics-for-the-life-sciences-new', [
    {
      name: 'bottom-audience-banner',
      id: '625ed3b26e4c9e4e2f3e78b8',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('hcp-newsbrief', [
    {
      name: 'bottom-audience-banner',
      id: '609296c4932e21aa13802f34',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('hcp-serialization-countdown', [
    {
      name: 'bottom-audience-banner',
      id: '60929739b1fccac95c1ba807',
      width: 768,
      height: 100,
    },
  ])
  .setAdUnits('hcp-serialization-countdown-new', [
    {
      name: 'bottom-audience-banner',
      id: '625ed4056e4c9e529c3e7914',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('hcp-quick-hits', [
    {
      name: 'bottom-audience-banner',
      id: '60929790932e212620803005',
      width: 768,
      height: 100,
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
  .setAdUnits('oem-shop-talk', [
    {
      name: 'bottom-audience-banner',
      id: '609297fa932e21250b80303d',
      width: 560,
      height: 127,
    },
  ])
  .setAdUnits('pfw-joyces-voice', [
    {
      name: 'bottom-audience-banner',
      id: '6092988cb1fcca6b491ba899',
      width: 560,
      height: 127,
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
  .setAdUnits('hcp-newsbrief-updated', [
    {
      name: 'bottom-audience-banner',
      id: '61f2a4e36e4c9e15a13e6110',
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
  ]);

module.exports = config;
