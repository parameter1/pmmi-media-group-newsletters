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
    description: 'Covering regulatory issues, GDPs, and temperature-controlled transport',
    ...brands.hcp,
  },
  'hcp-logistics-for-the-life-sciences-new': {
    name: 'Logistics for the Life Sciences',
    description: 'Covering regulatory issues, GDPs, and temperature-controlled transport',
    ...brands.hcp,
    secondaryColor: '#84bcc9',
    headlineColor: '#3c3c3c',
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
  'hcp-serialization-countdown-new': {
    name: 'Serialization Countdown',
    description: 'Regulatory compliance for product traceability',
    ...brands.hcp,
    secondaryColor: '#abd8c8',
    headlineColor: '#3c3c3c',
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
  'pw-expo': {
    name: 'Expo',
    description: 'TBD',
    title: 'Live from PACK EXPO',
    ...brands.pw,
  },
  cpgnext: {
    name: 'CPGNext',
    description: 'Digital Transformation In Packaged Goods Manufacturing',
  },
  'pw-weekly': {
    brand: 'Packaging World',
    title: 'PW Weekly Wrap Up',
    description: 'Weekly Wrap Up',
    primaryColor: '#005BAB',
    headerSrc: '/files/base/pmmi/all/image/newsletters/pw2015_logo_white.png',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world/', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/packagingworld', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld', target: '_blank' },
      ],
    },
  },
  'pw-daily': {
    brand: 'Packaging World',
    title: 'PW Daily',
    headerSrc: '/files/base/pmmi/all/image/newsletters/pw2015_logo_white.png',
    primaryColor: '#005BAB',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world/', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/packagingworld', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld', target: '_blank' },
      ],
    },
  },
  'pfw-daily': {
    brand: 'ProFood World',
    title: 'PFW Daily',
    headerSrc: '/files/base/pmmi/all/image/newsletters/profoodworld_logo_all_white_text.png',
    primaryColor: '#004C92',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/profoodworld', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/ProFoodWorld', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/ProFoodWorld', target: '_blank' },
      ],
    },
  },
  'oem-daily': {
    brand: 'OEM Magazine',
    title: 'OEM Daily',
    headerSrc: '/files/base/pmmi/all/image/newsletters/oem_white.png',
    primaryColor: '#185B76',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters/',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/oem-magazine', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/oemmagazine', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/OEMMagazine', target: '_blank' },
      ],
    },
  },
  'hcp-daily': {
    brand: 'Healthcare Packaging',
    title: 'HCP Daily',
    headerSrc: '/files/base/pmmi/all/image/newsletters/hcp_logo_white.png',
    primaryColor: '#00B0DE',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters/',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/healthcare-packaging-/', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/healthcarepkg', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/HealthcarePackaging', target: '_blank' },
      ],
    },
  },
};

module.exports = config;
