// const express = require('express');
// const routes = require('./routes');

import express from 'express';
import routes from './routes';

class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}CDATASection.server

//module.exports = new App().server;
export default new App().server;
