const NativeXConfiguration = require('@parameter1/base-cms-marko-newsletters-native-x/config');

const config = new NativeXConfiguration('https://pmmi.native-x.parameter1.com/email-placement', { enabled: true });

config
  // default is equivalent to ROS
  .setAliasPlacements('default', [
    { name: 'default', id: '6010d853a80e1f000185c3da' },
  ])
  .setAliasPlacements('aw-news-insights', [
    { name: 'top-audience-banner', id: '6010908ba80e1f000181e7cc' },
    { name: 'slot-1', id: '60109092a80e1f000181e834' },
    { name: 'slot-2', id: '60109095717cf6000131dbfb' },
    { name: 'slot-3', id: '60109098a80e1f000181e8a5' },
    { name: 'slot-4', id: '6010909ca80e1f000181e8cb' },
    { name: 'slot-5', id: '601090a0717cf6000131dcad' },
  ])
  .setAliasPlacements('aw-product-insights', [
    { name: 'top-audience-banner', id: '60108ffe717cf6000131d319' },
    { name: 'slot-1', id: '60109004717cf6000131d381' },
    { name: 'slot-2', id: '60109007a80e1f000181dfb7' },
    { name: 'slot-3', id: '6010900b717cf6000131d412' },
    { name: 'slot-4', id: '6010900fa80e1f000181e0ab' },
    { name: 'slot-5', id: '60109014a80e1f000181e113' },
  ])
  .setAliasPlacements('aw-automation-skills', [
    { name: 'top-audience-banner', id: '6010952c717cf6000132203c' },
    { name: 'slot-1', id: '60109532717cf60001322085' },
    { name: 'slot-2', id: '60109535717cf600013220a6' },
    { name: 'slot-3', id: '60109539a80e1f0001822d9a' },
    { name: 'slot-4', id: '6010953c717cf60001322118' },
    { name: 'slot-5', id: '60109540717cf60001322144' },
  ])
  .setAliasPlacements('aw-continuous-processing', [
    { name: 'top-audience-banner', id: '6010971ca80e1f0001825118' },
    { name: 'slot-1', id: '60109720a80e1f000182515c' },
    { name: 'slot-2', id: '60109723717cf6000132456f' },
    { name: 'slot-3', id: '60109728a80e1f0001825202' },
    { name: 'slot-4', id: '6010972b717cf600013245fe' },
    { name: 'slot-5', id: '6010972fa80e1f0001825273' },
  ])
  .setAliasPlacements('aw-process-automation', [
    { name: 'top-audience-banner', id: '6010971ca80e1f0001825118' },
    { name: 'slot-1', id: '60109720a80e1f000182515c' },
    { name: 'slot-2', id: '60109723717cf6000132456f' },
    { name: 'slot-3', id: '60109728a80e1f0001825202' },
    { name: 'slot-4', id: '6010972b717cf600013245fe' },
    { name: 'slot-5', id: '6010972fa80e1f0001825273' },
  ])
  .setAliasPlacements('aw-factory-automation', [
    { name: 'top-audience-banner', id: '6010d929a80e1f000185d274' },
    { name: 'slot-1', id: '6010d92f717cf6000135bf66' },
    { name: 'slot-2', id: '6010d933a80e1f000185d31a' },
    { name: 'slot-3', id: '6010d936717cf6000135c032' },
    { name: 'slot-4', id: '6010d93a717cf6000135c08f' },
    { name: 'slot-5', id: '6010d93da80e1f000185d405' },
  ])
  .setAliasPlacements('aw-food-bev-pharma', [
    { name: 'top-audience-banner', id: '6010d9dca80e1f000185da77' },
    { name: 'slot-1', id: '6010d9df717cf6000135c78d' },
    { name: 'slot-2', id: '6010d9e2717cf6000135c7b5' },
    { name: 'slot-3', id: '6010d9e6a80e1f000185db04' },
    { name: 'slot-4', id: '6010d9ea717cf6000135c7f9' },
    { name: 'slot-5', id: '6010d9ed717cf6000135c834' },
  ])
  .setAliasPlacements('aw-key-insights', [
    { name: 'top-audience-banner', id: '6010da33717cf6000135cb66' },
    { name: 'slot-1', id: '6010da37717cf6000135cb8c' },
    { name: 'slot-2', id: '6010da5b717cf6000135cd09' },
    { name: 'slot-3', id: '6010da3a717cf6000135cbac' },
    { name: 'slot-4', id: '6010da3ea80e1f000185df19' },
    { name: 'slot-5', id: '6010da42717cf6000135cc02' },
  ])
  .setAliasPlacements('aw-system-integrators', [
    { name: 'top-audience-banner', id: '6010d8ada80e1f000185ca2b' },
    { name: 'slot-1', id: '6010d8b1a80e1f000185ca86' },
    { name: 'slot-2', id: '6010d8b5a80e1f000185cad5' },
    { name: 'slot-3', id: '6010d8b8717cf6000135b867' },
    { name: 'slot-4', id: '6010d8bc717cf6000135b8c6' },
    { name: 'slot-5', id: '6010d8c0a80e1f000185cc3c' },
  ])
  .setAliasPlacements('hcp-newsbrief', [
    { name: 'top-audience-banner', id: '6010d853a80e1f000185c3da' },
    { name: 'slot-1', id: '6010d857717cf6000135b179' },
    { name: 'slot-2', id: '6010d85aa80e1f000185c47a' },
    { name: 'slot-3', id: '6010d85e717cf6000135b229' },
    { name: 'slot-4', id: '6010d861717cf6000135b25e' },
    { name: 'slot-5', id: '6010d865a80e1f000185c560' },
  ])
  .setAliasPlacements('oem-insights', [
    { name: 'top-audience-banner', id: '60af9a2067bc2800016f2abd' },
    { name: 'slot-1', id: '60af9a342c48d90001146d39' },
    { name: 'slot-2', id: '60af9a5667bc2800016f2e1e' },
    { name: 'slot-3', id: '60af9a622c48d9000114702f' },
    { name: 'slot-4', id: '60af9a6e67bc2800016f2fa8' },
    { name: 'slot-5', id: '60af9a7c67bc2800016f30cb' },
  ])
  .setAliasPlacements('oem-shop-talk', [
    { name: 'top-audience-banner', id: '6010d7f9717cf6000135ad31' },
    { name: 'slot-1', id: '6010d7fd717cf6000135ad73' },
    { name: 'slot-2', id: '6010d800a80e1f000185bfee' },
    { name: 'slot-3', id: '6010d804717cf6000135adcd' },
    { name: 'slot-4', id: '6010d808717cf6000135ae0b' },
    { name: 'slot-5', id: '6010d80ca80e1f000185c0c2' },
  ])
  .setAliasPlacements('pfw-joyces-voice', [
    { name: 'top-audience-banner', id: '60109463a80e1f00018221eb' },
    { name: 'slot-1', id: '60109467a80e1f0001822227' },
    { name: 'slot-2', id: '6010946aa80e1f0001822251' },
    { name: 'slot-3', id: '60109479a80e1f0001822345' },
    { name: 'slot-4', id: '6010947d717cf60001321645' },
    { name: 'slot-5', id: '60109480a80e1f0001822396' },
  ])
  .setAliasPlacements('pfw-hand-picked', [
    { name: 'top-audience-banner', id: '623485b234a89300018f5f51' },
    { name: 'slot-1', id: '623485ca34a89300018f62ff' },
    { name: 'slot-2', id: '623485d734a89300018f646f' },
    { name: 'slot-3', id: '623485f034a89300018f66bf' },
    { name: 'slot-4', id: '62348604336e9a0001011fc8' },
    { name: 'slot-5', id: '6234861534a89300018f6ae6' },
  ])
  .setAliasPlacements('pfw-new-issue-alert', [
    { name: 'top-audience-banner', id: '62348498336e9a000100ef2e' },
    { name: 'slot-1', id: '623484c134a89300018f3dc0' },
    { name: 'slot-2', id: '623484e434a89300018f4737' },
    { name: 'slot-3', id: '623484fb336e9a00010101cf' },
    { name: 'slot-4', id: '6234850a336e9a0001010338' },
    { name: 'slot-5', id: '6234851734a89300018f4e26' },
  ])
  .setAliasPlacements('pw-contract-packaging', [
    { name: 'top-audience-banner', id: '6010d73ca80e1f000185b6ac' },
    { name: 'slot-1', id: '6010d73f717cf6000135a481' },
    { name: 'slot-2', id: '6010d743a80e1f000185b718' },
    { name: 'slot-3', id: '6010d747717cf6000135a4e8' },
    { name: 'slot-4', id: '6010d74ba80e1f000185b762' },
    { name: 'slot-5', id: '6010d74e717cf6000135a543' },
  ])
  .setAliasPlacements('pw-editors-picks', [
    { name: 'top-audience-banner', id: '600dbd92a80e1f00015a26a3' },
    { name: 'slot-1', id: '600d8bf0a80e1f0001581665' },
    { name: 'slot-2', id: '600dbda47885150001411078' },
    { name: 'slot-3', id: '600dbda9a80e1f00015a277b' },
    { name: 'slot-4', id: '600dbdad78851500014110ea' },
    { name: 'slot-5', id: '600dc4317885150001416988' },
  ])
  .setAliasPlacements('pw-end-of-line-strategies', [
    { name: 'top-audience-banner', id: '6010d6e0a80e1f000185b2fb' },
    { name: 'slot-1', id: '6010d6e6a80e1f000185b337' },
    { name: 'slot-2', id: '6010d6ea717cf6000135a0fe' },
    { name: 'slot-3', id: '6010d6ed717cf6000135a142' },
    { name: 'slot-4', id: '6010d6f1a80e1f000185b412' },
    { name: 'slot-5', id: '6010d6f5717cf6000135a196' },
  ])
  .setAliasPlacements('pw-packaging-insights', [
    { name: 'top-audience-banner', id: '6010d685a80e1f000185acc9' },
    { name: 'slot-1', id: '6010d68a717cf60001359ada' },
    { name: 'slot-2', id: '6010d68da80e1f000185ad7b' },
    { name: 'slot-3', id: '6010d691a80e1f000185ae07' },
    { name: 'slot-4', id: '6010d695a80e1f000185ae27' },
    { name: 'slot-5', id: '6010d698a80e1f000185ae5e' },
  ])
  .setAliasPlacements('pw-shelf-impact', [
    { name: 'top-audience-banner', id: '6010d62d717cf6000135945d' },
    { name: 'slot-1', id: '6010d632a80e1f000185a762' },
    { name: 'slot-2', id: '6010d637a80e1f000185a7d9' },
    { name: 'slot-3', id: '6010d63a717cf60001359557' },
    { name: 'slot-4', id: '6010d63e717cf600013595c4' },
    { name: 'slot-5', id: '6010d641a80e1f000185a8d0' },
  ])
  .setAliasPlacements('pw-machine-automation-insights', [
    { name: 'top-audience-banner', id: '6010d2f4717cf60001356a81' },
    { name: 'slot-1', id: '6010d2faa80e1f0001857d76' },
    { name: 'slot-2', id: '6010d2fe717cf60001356b12' },
    { name: 'slot-3', id: '6010d302a80e1f0001857e06' },
    { name: 'slot-4', id: '6010d305a80e1f0001857e4d' },
    { name: 'slot-5', id: '6010d308a80e1f0001857e6a' },
  ])
  .setAliasPlacements('pw-new-issue-alert', [
    { name: 'top-audience-banner', id: '6010d0aea80e1f0001855ead' },
    { name: 'slot-1', id: '6010d0b1a80e1f0001855f1a' },
    { name: 'slot-2', id: '6010d0b5a80e1f0001855f37' },
    { name: 'slot-3', id: '6010d0b9717cf60001354dd7' },
    { name: 'slot-4', id: '6010d0bca80e1f0001855fc0' },
    { name: 'slot-5', id: '6010d0c0a80e1f0001856012' },
  ])
  .setAliasPlacements('pw-new-machinery', [
    { name: 'top-audience-banner', id: '6010cc15a80e1f0001851ff5' },
    { name: 'slot-1', id: '6010cc18a80e1f0001852025' },
    { name: 'slot-2', id: '6010cc1ca80e1f000185205c' },
    { name: 'slot-3', id: '6010cc21a80e1f000185208b' },
    { name: 'slot-4', id: '6010cc24717cf600013510da' },
    { name: 'slot-5', id: '6010cc28a80e1f000185210b' },
  ])
  .setAliasPlacements('hcp-quick-hits', [
    { name: 'top-audience-banner', id: '61c23cc5e30fac00015e4bfe' },
    { name: 'slot-1', id: '61c23cd3c69ddc00017e1875' },
    { name: 'slot-2', id: '61c23cdec69ddc00017e18c9' },
    { name: 'slot-3', id: '61c23ceac69ddc00017e1948' },
    { name: 'slot-4', id: '61c23cf5e30fac00015e4dfe' },
    { name: 'slot-5', id: '61c23cfee30fac00015e4e4f' },
  ])
  .setAliasPlacements('hcp-quick-hits-new', [
    { name: 'top-audience-banner', id: '61c23cc5e30fac00015e4bfe' },
    { name: 'slot-1', id: '61c23cd3c69ddc00017e1875' },
    { name: 'slot-2', id: '61c23cdec69ddc00017e18c9' },
    { name: 'slot-3', id: '61c23ceac69ddc00017e1948' },
    { name: 'slot-4', id: '61c23cf5e30fac00015e4dfe' },
    { name: 'slot-5', id: '61c23cfee30fac00015e4e4f' },
  ])
  .setAliasPlacements('hcp-serialization-countdown', [
    { name: 'top-audience-banner', id: '61c23d15e30fac00015e4f37' },
    { name: 'slot-1', id: '61c23d20e30fac00015e4fc1' },
    { name: 'slot-2', id: '61c23d29e30fac00015e5061' },
    { name: 'slot-3', id: '61c23d34e30fac00015e510a' },
    { name: 'slot-4', id: '61c23d3ec69ddc00017e1d00' },
    { name: 'slot-5', id: '61c23d49e30fac00015e51e4' },
  ])
  .setAliasPlacements('hcp-serialization-countdown-new', [
    { name: 'top-audience-banner', id: '61c23d15e30fac00015e4f37' },
    { name: 'slot-1', id: '61c23d20e30fac00015e4fc1' },
    { name: 'slot-2', id: '61c23d29e30fac00015e5061' },
    { name: 'slot-3', id: '61c23d34e30fac00015e510a' },
    { name: 'slot-4', id: '61c23d3ec69ddc00017e1d00' },
    { name: 'slot-5', id: '61c23d49e30fac00015e51e4' },
  ])
  .setAliasPlacements('hcp-logistics-life-sciences', [
    { name: 'top-audience-banner', id: '61c23d5ee30fac00015e52dd' },
    { name: 'slot-1', id: '61c23d72c69ddc00017e2092' },
    { name: 'slot-2', id: '61c23d80c69ddc00017e2129' },
    { name: 'slot-3', id: '61c23d8be30fac00015e55d5' },
    { name: 'slot-4', id: '61c23d94c69ddc00017e2251' },
    { name: 'slot-5', id: '61c23da1c69ddc00017e2300' },
  ])
  .setAliasPlacements('hcp-logistics-for-the-life-sciences-new', [
    { name: 'top-audience-banner', id: '61c23d5ee30fac00015e52dd' },
    { name: 'slot-1', id: '61c23d72c69ddc00017e2092' },
    { name: 'slot-2', id: '61c23d80c69ddc00017e2129' },
    { name: 'slot-3', id: '61c23d8be30fac00015e55d5' },
    { name: 'slot-4', id: '61c23d94c69ddc00017e2251' },
    { name: 'slot-5', id: '61c23da1c69ddc00017e2300' },
  ])
  .setAliasPlacements('hcp-newsbrief-updated', [
    { name: 'top-audience-banner', id: '61f2a545077ca8000172776d' },
    { name: 'slot-1', id: '61f2a552077ca800017277fc' },
    { name: 'slot-2', id: '61f2a561077ca80001727877' },
    { name: 'slot-3', id: '61f2a570077ca800017278da' },
    { name: 'slot-4', id: '61f2a57b077ca80001727934' },
    { name: 'slot-5', id: '61f2a5884a5d8e0001a70a08' },
  ]);

module.exports = config;
