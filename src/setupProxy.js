const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/youtubeApi',
    createProxyMiddleware({
      target: 'https://youtube.googleapis.com',
      changeOrigin: true,
      pathRewrite: {
        '^/youtubeApi': '',
      },
    })
  );
};
