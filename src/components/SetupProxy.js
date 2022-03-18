const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app =>{
    app.use(
        createProxyMiddleware ('/h/mobileapis/directory/airlines/homework',{
            target:'https://www.kayak.com',
            changeOrigin:true,
        })
    )
}