import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

enableProdMode();

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

const app = express();

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
const template = readFileSync(join(DIST_FOLDER, '', 'index.html')).toString();
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('main.server');

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url, extraProviders: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]};

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(DIST_FOLDER, '')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});