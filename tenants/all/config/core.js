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
  'pw-expo': {
    name: 'Expo',
    description: 'TBD',
    title: 'Live from PACK EXPO',
    ...brands.pw,
  },
  'pw-weekly': {
    brand: 'Packaging World',
    brandShort: 'pw',
    title: 'PW Weekly Wrap Up',
    description: 'Weekly Wrap Up',
    primaryColor: '#005BAB',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pwnlheader.png',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/pw-inline-editor.png',
      width: '50',
      name: 'Matt Reynolds',
      title: 'Chief Editor',
      contact: {
        imagePath: '/files/base/pmmi/all/image/static/newsletters',
        links: [
          { provider: 'email', href: 'mailto:mreynolds@pmmimediagroup.com', target: '_blank' },
          { provider: 'linkedin', href: 'https://www.linkedin.com/in/mreynoldspw', target: '_blank' },
        ],
      },
    },
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
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pwnlheader.png',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/pw-editor.png',
      width: '50',
      name: 'Matt Reynolds',
      title: 'Chief Editor',
    },
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
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pfwnlheader.png',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/teal.png',
      width: '50',
      name: 'Derrick Teal',
      title: 'Editor-in-Chief',
    },
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
    brand: 'OEM Newsletter',
    brandShort: 'oem',
    title: 'OEM Newsletter',
    description: 'Weekly News for the Packaging<br/>& Processing OEM',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/oemnlheader.png',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/oem-editor.png',
      width: '50',
      name: 'Sean Riley',
      title: 'Senior News Director',
    },
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
    header: {
      src: '/files/base/pmmi/all/image/newsletters/hcpquickhits_header.png',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/CuneoHCP.png',
      width: '50',
      name: 'Elisabeth Cuneo',
      title: 'Editor-in-Chief',
    },
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
    description: 'Contract Packaging and Manufacturing News & Developments',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/cmpnlheader.png',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/cmp-editor-joseph.png',
      width: '50',
      name: 'Joseph Derr',
      title: 'Editor',
    },
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
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pwnlheader.png',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/pw-inline-editor.png',
      width: '50',
      name: 'Matt Reynolds',
      title: 'Chief Editor',
      contact: {
        imagePath: '/files/base/pmmi/all/image/static/newsletters',
        links: [
          { provider: 'email', href: 'mailto:mreynolds@pmmimediagroup.com', target: '_blank' },
          { provider: 'linkedin', href: 'https://www.linkedin.com/in/mreynoldspw', target: '_blank' },
        ],
      },
    },
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
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pfwnlheader.png',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/teal.png',
      width: '50',
      name: 'Derrick Teal',
      title: 'Editor-in-Chief',
      contact: {
        imagePath: '/files/base/pmmi/all/image/static/newsletters',
        links: [
          { provider: 'email', href: 'mailto:mcosta@pmmimediagroup.com', target: '_blank' },
          { provider: 'linkedin', href: 'https://www.linkedin.com/in/michael-costa-0283225/', target: '_blank' },
        ],
      },
    },
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
  'hcp-quick-hits-2024': {
    ...brands.hcp,
    title: 'HCP Quick Hits',
    description: 'Your Healthcare Industry Week in Review',
    logoSrc: '/files/base/pmmi/all/image/newsletters/hcp-quick-hits-header.png',
  },
  'pmg-sustainable-packaging': {
    title: 'Sustainable Packaging',
    logoSrc: '/files/base/pmmi/all/image/newsletters/susquickhits_header.jpg',
    primaryColor: '#04a77e',
  },
  'pw-most-popular': {
    title: 'Top Articles of the Week',
  },
};

module.exports = config;
