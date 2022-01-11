const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-newsletters');
const { set } = require('@parameter1/base-cms-object-path');
const coreConfig = require('./config/core');
const customConfig = require('./config/custom');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  customConfig,
  publicPath: 'public',
  onStart: (app) => {
    app.set('trust proxy', 'loopback, linklocal, uniquelocal');
    set(app.locals, 'i18n', v => v);
  },
  onAsyncBlockError: e => newrelic.noticeError(e),
}).then(() => log('Newsletters started!')).catch(e => setImmediate(() => { throw e; }));
