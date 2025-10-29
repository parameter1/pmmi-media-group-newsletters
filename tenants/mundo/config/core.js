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
  'mundo-expo-pack': {
    brand: 'Mundo EXPO PACK',
    brandShort: 'mundo',
    title: 'Mundo EXPO PACK',
    description: 'Inteligencia de mercados,<br/>tecnologías y tendencias',
    lang: 'es-MX',
    header: {
      src: '/files/base/pmmi/all/image/newsletters/mundonlheader.png',
      width: '640',
    },
    editor: {
      src: '/files/base/pmmi/all/image/newsletters/editor-lilian.png ',
      width: '50',
      name: 'Lilián Robayo Páez',
      title: 'Editora en jefe',
    },
    primaryColor: '#007557',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/mundo-expopack/', target: '_blank' },
        { provider: 'youtube', href: 'https://www.youtube.com/channel/UCM5Ldhqi4SFRIyoGxuJZV3w', target: '_blank' },
        { provider: 'applepodcast', href: 'https://podcasts.apple.com/mx/podcast/unpacked-with-pmmi-en-espa%C3%B1ol/id1748129616', target: '_blank' },
        { provider: 'spotify', href: 'https://open.spotify.com/show/7Gkry7yJqDmsXFjqeBe68g?si=7034f76e6c554713&nd=1&dlsi=cdca54be9cb0432f', target: '_blank' },
      ],
    },
  },
  'expo-live': {
    name: 'En vivo desde la feria PACK EXPO',
    title: 'En vivo desde PACK EXPO',
    lang: 'es-MX',
  },
};

module.exports = config;
