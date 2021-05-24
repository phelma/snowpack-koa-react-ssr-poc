const { loadConfiguration, startServer } = require('snowpack')

exports.snowpackServer = loadConfiguration({}, '/Users/philiphelm/Code/uswitch/koa-snowpack/snowpack.config.js')
  .then(config => {
    // console.log("gotConfig", config)
    return startServer({config}, {isWatch: true})
  })
  .then(server => server)
  .catch(e => console.log('ERROR', e))
