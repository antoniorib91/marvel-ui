const { createProxyMiddleware } = require('http-proxy-middleware');
const md5 = require('md5');

const MARVELURL = process.env.REACT_APP_API_MARVEL;
const PK = process.env.REACT_APP_PRIVATE_KEY;
const PBK = process.env.REACT_APP_PUBLIC_KEY;

const handleOnProxyRequest = (proxyReq) => {
  const ts = new Date().getTime();
  const stringToHash = `${ts}${PK}${PBK}`;
  const hash = md5(stringToHash);
  const path = proxyReq.path;
  let newPath = path.includes('?') ? path + '&' : path + '?';
  newPath = `${newPath}ts=${ts}&apikey=${PBK}&hash=${hash}` 
  proxyReq.path = newPath;
};

const proxyMiddleware = createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: { '^/api/marvel': '' },
  target: `${MARVELURL}`,
  logLevel: 'debug',
  onProxyReq: handleOnProxyRequest
});

module.exports = (app) => {
  app.use('/api', proxyMiddleware);
};
