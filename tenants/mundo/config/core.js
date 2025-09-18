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
      src: '/files/base/pmmi/all/image/newsletters/mundo-editor.png',
      width: '50',
      name: 'Lilián Robayo Páez',
      title: 'Directora de Medios',
      titleAddition: 'para Latinoamérica de PMMI',
    },
    primaryColor: '#007557',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/mundo-expopack/', target: '_blank' },
        { provider: 'youtube', href: 'https://www.youtube.com/channel/UCM5Ldhqi4SFRIyoGxuJZV3w', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/MundoEXPOPACK', target: '_blank' },
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
