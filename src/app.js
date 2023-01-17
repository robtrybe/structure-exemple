const express = require('express');
const app = express();

app.use('/users', require('./routers/users.routes'));
app.use('/products', require('./routers/products.routes'));

module.exports = app;