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

  'aw-automation-skills': {
    name: 'Automation Skills',
    description: 'Automation applications and trends',
    ...brands.aw,
  },
  'aw-continuous-processing': {
    name: 'Continuous Processing',
    description: 'News for industries where production flows without interruption',
    ...brands.aw,
  },
  'aw-process-automation': {
    name: 'Process Automation',
    description: 'News for industries where production flows without interruption',
    ...brands.aw,
  },
  'aw-factory-automation': {
    name: 'Factory Automation',
    description: 'News from the discrete manufacturing industries',
    ...brands.aw,
  },
  'aw-food-bev-pharma': {
    name: 'Food, Bev & Pharma',
    description: 'News from the consumer packaged goods industries',
    ...brands.aw,
  },
  'aw-key-insights': {
    name: 'Key Insights',
    description: 'Insights for management, engineering, IT and operations',
    ...brands.aw,
  },
  'aw-news-insights': {
    name: 'Automation News Insights',
    description: 'What\'s trending in the world of automation technology',
    ...brands.aw,
  },
  'aw-product-insights': {
    name: 'Automation Product Insights',
    description: 'The latest innovations in automation products',
    ...brands.aw,
  },
  'aw-system-integrators': {
    name: 'System Integrators',
    description: '',
    ...brands.aw,
  },
  'hcp-logistics-life-sciences': {
    name: 'Logistics for the Life Sciences',
    description: 'Your news source for GDPs, regulatory issues and temperature-controlled transportation',
    ...brands.hcp,
  },
  'hcp-newsbrief': {
    name: 'Newsbrief',
    description: 'An editor-curated selection of life sciences packaging news and trends',
    ...brands.hcp,
  },
  'hcp-serialization-countdown': {
    name: 'Serialization Countdown',
    description: 'Regulatory compliance for product traceability',
    ...brands.hcp,
  },
  'hcp-quick-hits': {
    name: 'Quick Hits',
    description: 'Your Healthcare Industry Week in Review',
    seeAllLink: 'https://www.healthcarepackaging.com/quick-hits',
    ...brands.hcp,
    secondaryColor: '#01384B',
    headlineColor: '#3c3c3c',
  },
  'hcp-quick-hits-new': {
    name: 'Quick Hits',
    description: 'Your Healthcare Industry Week in Review',
    ...brands.hcp,
    secondaryColor: '#01384B',
    headlineColor: '#3c3c3c',
  },
  'oem-insights': {
    name: 'Insights',
    description: 'News and trends for packaging and processing machine builders',
    ...brands.oem,
  },
  'oem-shop-talk': {
    name: 'Shop Talk',
    description: 'New trends and conversations for packaging and processing machine builders',
    ...brands.oem,
  },
  'pfw-joyces-voice': {
    name: 'Joyce\'s Voice',
    description: 'Innovation and Technology for Global Food & Beverage Processing',
    ...brands.pfw,
  },
  'pfw-new-issue-alert': {
    name: 'New Issue Alert',
    description: 'Hot off the presses&emsp;&emsp;|&emsp;&emsp;<a href="#" style="color: #fff; text-decoration:underline;" target="_blank">View Digital Edition</a>',
    ...brands.pfw,
  },
  'pfw-hand-picked': {
    name: 'Hand Picked',
    description: 'The Latest News and Developments in Food and Beverage Processing',
    ...brands.pfw,
  },
  'pw-contract-packaging': {
    name: 'Contract Manufacturing + Packaging',
    description: 'The latest news, trends, and strategies about contract manufacturing and packaging',
    ...brands.pw,
  },
  'pw-editors-picks': {
    name: 'Editors\' Picks',
    description: 'Timely hand-picked favorites from <em>Packaging World</em>',
    ...brands.pw,
  },
  'pw-end-of-line-strategies': {
    name: 'End-of-Line Strategies',
    description: 'Life at the intersection of packaging and logistics',
    ...brands.pw,
  },
  'pw-packaging-insights': {
    name: 'Packaging Insights',
    description: 'Tips, Ideas + Best Practices',
    ...brands.pw,
  },
  'pw-shelf-impact': {
    name: 'Shelf Impact',
    description: 'The brand manager\'s source for standing out in a crowd',
    ...brands.pw,
  },
  'pw-machine-automation-insights': {
    name: 'Machine Automation Insights',
    description: 'Automation trends affecting packaging machinery',
    ...brands.pw,
  },
  'pw-new-issue-alert': {
    name: 'New Issue Alert',
    description: 'Hot off the presses&emsp;&emsp;|&emsp;&emsp;<a href="#" style="color: #fff; text-decoration:underline;" target="_blank">View Digital Edition</a>',
    ...brands.pw,
  },
  'pw-new-machinery': {
    name: 'New Machinery',
    description: 'Get a glimpse at next gen equipment',
    ...brands.pw,
  },
  'hcp-newsbrief-updated': {
    name: 'Newsbrief',
    description: 'An editor-curated selection of life sciences packaging news and trends',
    ...brands.hcp,
  },
};

module.exports = config;
