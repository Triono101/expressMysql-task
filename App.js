const express = require('express');
const path = require('path');
const app = express();
const logger = require('morgan');
const router = require('./App/products/routes');
const productRouter = require('./App/products/routes');
const productRouterV1 = require('./App/product-v1/routes-v2');
const productRouterV2 = require('./App/product-v2/routes');
const port = process.env.PORT || "4000";

// Module Router
app.use(router);

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Handle File Static
app.use('/public', express.static(path.join(__dirname, 'uploads', )));

// Product Router
app.use('/api/v1', productRouter);
app.use('/api/v2', productRouterV1);
app.use('/api/v2', productRouterV2);

// Handle Error 404
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: 'Failed',
        message: 'Resource ' + req.originalUrl + ' Not Found'
    });
});

// App Server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });