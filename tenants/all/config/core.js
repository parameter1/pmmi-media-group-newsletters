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
    headerHeight: '50',
    editorSrc: '/files/base/pmmi/all/image/newsletters/mattreynolds.png',
    editorHeight: '210',
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
    title: 'PW Newsletter',
    description: 'Packaging News & Developments',
    headerSrc: '/files/base/pmmi/all/image/newsletters/pw2015_logo_white.png',
    headerHeight: '50',
    editorSrc: '/files/base/pmmi/all/image/newsletters/mattreynolds.png',
    editorHeight: '180',
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
    description: 'Food & Beverage Processing<br/>News & Developments',
    headerSrc: '/files/base/pmmi/all/image/newsletters/profoodworld_logo_all_white_text.png',
    headerHeight: '60',
    editorSrc: '/files/base/pmmi/all/image/newsletters/aaronhand.png',
    editorHeight: '180',
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
  'oem-daily': {
    brand: 'OEM Magazine',
    brandShort: 'oem',
    title: 'OEM Newsletter',
    description: 'Weekly News for the Packaging<br/>& Processing OEM',
    headerSrc: '/files/base/pmmi/all/image/newsletters/oem_white.png',
    headerHeight: '60',
    editorSrc: '/files/base/pmmi/all/image/newsletters/seanriley.png',
    editorHeight: '180',
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
    description: 'Weekly Healthcare Packaging<br/>News & Developments',
    headerSrc: '/files/base/pmmi/all/image/newsletters/hcp_logo_white.png',
    headerHeight: '60',
    editorSrc: '/files/base/pmmi/all/image/newsletters/kerensookne.png',
    editorHeight: '180',
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
    brand: 'CM+P Magazine',
    brandShort: 'cmp',
    title: 'CM+P Newsletter',
    description: 'Contract Packaging and Manufacturing News & Developments',
    headerSrc: '/files/base/pmmi/all/image/newsletters/cmp2022_logo_white.png',
    headerHeight: '60',
    editorSrc: '/files/base/pmmi/all/image/newsletters/melissagriffen.png',
    editorHeight: '180',
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
    digitalEdition: true,
    headerSrc: '/files/base/pmmi/all/image/newsletters/pw2015_logo_white.png',
    headerHeight: '50',
    editorSrc: '/files/base/pmmi/all/image/newsletters/mattreynolds.png',
    editorHeight: '210',
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
  'pfw-new-issue-alert': {
    brand: 'ProFood World',
    brandShort: 'pfw',
    title: 'PFW New Issue Alert',
    description: 'New Issue Alert',
    digitalEdition: true,
    headerSrc: '/files/base/pmmi/all/image/newsletters/profoodworld_logo_all_white_text.png',
    headerHeight: '70',
    editorSrc: '/files/base/pmmi/all/image/newsletters/aaronhand.png',
    editorHeight: '210',
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
};

module.exports = config;
