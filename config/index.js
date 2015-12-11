
process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim()

import path from 'path'
import meta from '../package.json'
import { argv } from 'yargs'


const config = new Map()
const env = process.env.NODE_ENV

const envConfig = require('./' + env + '.json')


// ------------------------------------
// Environment
// ------------------------------------
config.set('env', env);
config.set('globals', {
  'NODE_ENV'     : config.get('env'),
  '__DEV__'      : config.get('env') === 'development',
  '__PROD__'     : config.get('env') === 'production',
  '__DEBUG__'    : !!argv.debug,
  '__DEBUG_NW__' : !!argv.nw
});

// ------------------------------------
// Server
// ------------------------------------
config.set('server_host', 'localhost');
config.set('server_port', process.env.PORT || envConfig.port || 4006);
config.set('api_target', envConfig.api_target)
config.set('view_cache', envConfig.view_cache)

// ------------------------------------
// Webpack
// ------------------------------------
config.set('webpack_port', 3004);
config.set('webpack_public_path',
  `http://${config.get('server_host')}:${config.get('webpack_port')}/`
);

// ------------------------------------
// Project
// ------------------------------------
config.set('path_project', path.resolve(__dirname, '../'));
config.set('dir_src',  'src');
config.set('dir_dist', '.dist');

config.set('vendor_dependencies', [
  'vue',
  'vuex',
  'vue-router',
  'vue-resource'
]);

// ------------------------------------
// Utilities
// ------------------------------------
const paths = (() => {
  const base = [config.get('path_project')];
  const resolve = path.resolve;

  const project = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    project : project,
    src     : project.bind(null, config.get('dir_src')),
    dist    : project.bind(null, config.get('dir_dist'))
  };
})();

config.set('utils_paths', paths);

export default config
