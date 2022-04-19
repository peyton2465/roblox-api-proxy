const app = require('express')()
const { createProxyMiddleware } = require('http-proxy-middleware')

app.use('/:api/*', createProxyMiddleware({ 
    changeOrigin: true,
    router: (req) => `https://${req.params.api}.roblox.com`,
    onProxyReq: (req) => {
        req.path = req.path.substring(req.path.indexOf('/', 1))
        req.setHeader('User-Agent', 'something')
        req.removeHeader('Roblox-Id')
    }
}))

app.all('/*', (_, res) => res.send('we\'re up!'))
app.listen(80)