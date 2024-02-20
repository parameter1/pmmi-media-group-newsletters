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
  'hcp-quick-hits': {
    name: 'Quick Hits',
    description: 'Your Healthcare Industry Week in Review',
    ...brands.hcp,
    secondaryColor: '#01384B',
    headlineColor: '#3c3c3c',
  },
  'pfw-new-issue-alert': {
    brand: 'ProFood World',
    brandShort: 'pfw',
    title: 'PFW New Issue Alert',
    description: 'New Issue Alert',
    headerSrc: '/files/base/pmmi/all/image/newsletters/profoodworld_logo_all_white_text.png',
    primaryColor: '#8eae3e',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/profoodworld', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/ProFoodWorld', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/ProFoodWorld', target: '_blank' },
      ],
    },
  },
  'pw-expo': {
    name: 'Expo',
    description: 'TBD',
    title: 'Live from PACK EXPO',
    ...brands.pw,
  },
  cpgnext: {
    name: 'CPGNext',
    brandShort: 'cpgnext',
    description: 'Digital Transformation In Packaged Goods Manufacturing',
  },
  'pw-weekly': {
    brand: 'Packaging World',
    brandShort: 'pw',
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
    brandShort: 'pw',
    description: 'Daily Edition',
    title: 'PW Newsletter',
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
    brandShort: 'pfw',
    title: 'PFW Newsletter',
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
    brand: 'OEM Newsletter',
    brandShort: 'oem',
    title: 'OEM Newsletter',
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
    brandShort: 'hcp',
    title: 'HCP Newsletter',
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
  'cmp-daily': {
    brand: 'CM+P Newsletter',
    brandShort: 'cmp',
    title: 'CM+P Newsletter',
    headerSrc: '/files/base/pmmi/all/image/newsletters/cmp2022_logo_white.png',
    primaryColor: '#00B15D',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters/',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world/', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/packagingworld', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld/', target: '_blank' },
      ],
    },
  },
  'pw-new-issue': {
    brand: 'Packaging World',
    brandShort: 'pw',
    title: 'PW New Issue Alert',
    description: 'New Issue Alert',
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
};

module.exports = config;
