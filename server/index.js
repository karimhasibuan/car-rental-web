const http = require('http');
const getHtml = require('./helpers/getHtml.js');
const fs = require('fs');
const readStaticFiles = require('./helpers/readStaticFiles.js');
const PORT = 8000;
const data = require('./helpers/data.js');
const onReq = (req, res) => {
    const url = req.url;

    if (url === '/') {
        console.log({ data });
        getHtml('index.html', res);
    } else if (url === '/cars') {
        getHtml('carList.html', res);
    } else if (url.match('.js$')) {
        readStaticFiles(url, res, 'text/js', 'UTF-8');
    } else if (url.match('.css$')) {
        readStaticFiles(url, res, 'text/css', 'UTF-8');
    } else if (url.match('.jpg$')) {
        readStaticFiles(url, res, 'images/jpg');
    }
};

const server = http.createServer(onReq);

server.listen(PORT, '0.0.0.0', () => {
    console.info(`is listening on port ${PORT}`);
});
