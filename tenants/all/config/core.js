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
        { provider: 'applepodcast', href: 'https://podcasts.apple.com/us/podcast/through-the-line-packaging-and-processing/id1804661196', target: '_blank' },
        { provider: 'spotify', href: 'https://open.spotify.com/show/65uZebTErQesDl3ubE8INm?si=f81fe5c94de74da5&nd=1&dlsi=b9', target: '_blank' },
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
        { provider: 'applepodcast', href: 'https://podcasts.apple.com/us/podcast/through-the-line-packaging-and-processing/id1804661196', target: '_blank' },
        { provider: 'spotify', href: 'https://open.spotify.com/show/65uZebTErQesDl3ubE8INm?si=f81fe5c94de74da5&nd=1&dlsi=b9', target: '_blank' },
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
        { provider: 'applepodcast', href: 'https://podcasts.apple.com/us/podcast/unpacked-with-pmmi/id1476565635', target: '_blank' },
        { provider: 'spotify', href: 'https://open.spotify.com/show/6Zc2Axl5vcn68HXEBaTXEP', target: '_blank' },
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
      name: 'Liz Cuneo',
      title: 'Editor-in-Chief',
    },
    primaryColor: '#00B0DE',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters/',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/healthcare-packaging-/', target: '_blank' },
        { provider: 'applepodcast', href: 'https://podcasts.apple.com/us/podcast/through-the-line-packaging-and-processing/id1804661196', target: '_blank' },
        { provider: 'spotify', href: 'https://open.spotify.com/show/65uZebTErQesDl3ubE8INm?si=f81fe5c94de74da5&nd=1&dlsi=b9', target: '_blank' },
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
        { provider: 'applepodcast', href: 'https://podcasts.apple.com/us/podcast/through-the-line-packaging-and-processing/id1804661196', target: '_blank' },
        { provider: 'spotify', href: 'https://open.spotify.com/show/65uZebTErQesDl3ubE8INm?si=f81fe5c94de74da5&nd=1&dlsi=b9', target: '_blank' },
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
        { provider: 'applepodcast', href: 'https://podcasts.apple.com/us/podcast/through-the-line-packaging-and-processing/id1804661196', target: '_blank' },
        { provider: 'spotify', href: 'https://open.spotify.com/show/65uZebTErQesDl3ubE8INm?si=f81fe5c94de74da5&nd=1&dlsi=b9', target: '_blank' },
      ],
    },
  },
  'pmg-sustainable-packaging': {
    title: 'Sustainable Packaging',
    logoSrc: '/files/base/pmmi/all/image/newsletters/susquickhits_header.jpg',
    brandShort: 'pw',
    primaryColor: '#04a77e',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world/', target: '_blank' },
        { provider: 'applepodcast', href: 'https://podcasts.apple.com/us/podcast/through-the-line-packaging-and-processing/id1804661196', target: '_blank' },
        { provider: 'spotify', href: 'https://open.spotify.com/show/65uZebTErQesDl3ubE8INm?si=f81fe5c94de74da5&nd=1&dlsi=b9', target: '_blank' },
      ],
    },
  },
  'pw-most-popular': {
    title: 'Top Articles of the Week',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pwtoparticlesheader.png',
      attrs: { width: 640 },
    },
    realm: '5d88cedef175132c008b456b',
  },
  'pw-most-popular-soon-to-unengage': {
    title: 'Top Articles of the Week',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pwtoparticlesheader.png',
      attrs: { width: 640 },
    },
    realm: '5d88cedef175132c008b456b',
  },
  'hcp-most-popular': {
    title: 'Top Articles of the Week',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/hcpTopArticles.png',
      attrs: { width: 640 },
    },
    realm: '5d88cef7f175132c008b456f',
  },
  'hcp-most-popular-soon-to-unengage': {
    title: 'Top Articles of the Week',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/hcpTopArticles.png',
      attrs: { width: 640 },
    },
    realm: '5d88cef7f175132c008b456f',
  },
  'oem-most-popular': {
    title: 'Top Articles of the Week',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/oemTopArticles.png',
      attrs: { width: 640 },
    },
    realm: '5d88cf05f175132c008b4573',
  },
  'oem-most-popular-soon-to-unengage': {
    title: 'Top Articles of the Week',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/oemTopArticles.png',
      attrs: { width: 640 },
    },
    realm: '5d88cf05f175132c008b4573',
  },
  'pfw-most-popular': {
    title: 'Top Articles of the Week',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pfwTopArticles.png',
      attrs: { width: 640 },
    },
    realm: '5d88cf1af175132c008b4577',
  },
  'pfw-most-popular-soon-to-unengage': {
    title: 'Top Articles of the Week',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/pfwTopArticles.png',
      attrs: { width: 640 },
    },
    realm: '5d88cf1af175132c008b4577',
  },
};

module.exports = config;
