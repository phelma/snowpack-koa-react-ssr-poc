const htmlTemplate = (appString) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>window.HMR_WEBSOCKET_PORT = 3001</script>
  </head>
  <body>
    <div className="appWrapper">
${appString}
    </div>
    <script type="module" src="http://localhost:8080/dist/client.js"></script>
  </body>
</html>
`

exports.htmlTemplate = htmlTemplate