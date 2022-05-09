const express = require('express');
const app = express();

app.use(express.json());

const dashboardRoutes = require('./dashboard.routes');
const loginRoutes = require('./login.routes');
const registerRoutes = require('./register.routes');

// app.use(dashboardRoutes);
app.use(loginRoutes);
app.use(registerRoutes);

module.exports = app;
