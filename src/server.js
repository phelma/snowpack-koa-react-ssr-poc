const Koa = require('koa')
const app = new Koa()
const { StaticRouter } = require('react-router-dom')

const { snowpackServer } = require('./snowpack')

const main = async () => {
  const server = await snowpackServer
  const runtime = server.getServerRuntime()

  app.use(async (ctx, next) => {
    try {
      const buildResult = await server.loadUrl(ctx.req.url)
      if (buildResult.contentType === 'text/html') {
        throw 'html'
      }
      ctx.type = buildResult.contentType
      ctx.body = buildResult.contents.toString()
    } catch (e) {
      const defaultBuildResult = await server.loadUrl('/', {isSsr: true})
      const importedComponent = await runtime.importModule(
        '/dist/server-app.js'
      )
      const {ServerApp, React, ReactDOMServer} = importedComponent.exports.default
      console.log('SSR React')
      const appHtml = ReactDOMServer.renderToString(
        React.createElement(ServerApp, {url: ctx.req.url})
      )

      const document = defaultBuildResult.contents
        .toString()
        .replace('<div id="app"></div>', appHtml)
        .replace(/src="\//g, 'src="http://localhost:3001/')

      ctx.body = document
    }
  })

  app.listen(3000)
  console.log('listening on 3000')
}

main()
