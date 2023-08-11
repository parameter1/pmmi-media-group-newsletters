const NativeXConfiguration = require('@parameter1/base-cms-marko-newsletters-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com/email-placement', { enabled: true });

config
  // default is equivalent to ROS
  .setAliasPlacements('default', [
    { name: 'default', id: '6010d853a80e1f000185c3da' },
  ])
  .setAliasPlacements('mundo-perspectivas', [
    { name: 'top-audience-banner', id: '60c2041f6b523e0001192730' },
    { name: 'slot-1', id: '60c2044f5f957c00015a03e8' },
    { name: 'slot-2', id: '60c204646b523e0001192a1a' },
    { name: 'slot-3', id: '60c2047a6b523e0001192ae7' },
    { name: 'slot-4', id: '60c2048e6b523e0001192ba8' },
    { name: 'slot-5', id: '60c204a35f957c00015a0771' },
  ]);

module.exports = config;
