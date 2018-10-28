const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require('path');

module.exports = (app) => {
  const PORT = process.env.PORT || 8080;
  
    app.set('PG_HOST', process.env.PG_HOST || 'localhost')
    app.set('PG_USER', process.env.PG_USER || 'boomtown')
    app.set('PG_PASSWORD', process.env.PG_PASSWORD || 'boomtown')
    app.set('PG_DB', process.env.PG_DB || 'boomtown')
    app.set('JWT_SECRET', process.env.JWT_SECRET || 'keyboard cat')
    app.set('JWT_COOKIE_NAME', process.env.JWT_COOKIE_NAME || 'keyboard cat')

  app.use(cookieParser());

  if (process.env.NODE_ENV === 'production') {
    const root = path.resolve(__dirname, '../public');

    // Serve the static front-end from /public when deployed
    app.use(express.static(root));
    app.use(fallback('index.html', { root }));
  }

  if (process.env.NODE_ENV === 'development') {
    // Allow requests from dev server address
    const corsConfig = {
      origin: 'http://localhost:3000',
      credentials: true
    };
    app.set('CORS_CONFIG', corsConfig);

    // Allow requests from dev server address
    app.use(cors(corsConfig));
  }

  return PORT;
};
