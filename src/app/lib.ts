/**
 * Defines library files for creating a library bundle
 */

/* tslint:disable:no-string-literal no-require-imports */

// Polyfills
import 'es6-shim';
import 'es6-promise';
import 'zone.js/lib/browser/zone-microtask';
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)

if ('production' !== process.env.ENV) {
    // Reflect Polyfill
    require('es7-reflect-metadata/dist/browser');
    Error['stackTraceLimit'] = Infinity;
    Zone['longStackTraceZone'] = require('zone.js/lib/zones/long-stack-trace.js');
}

if ('production' === process.env.ENV) {
    // Reflect with es7-reflect-metadata/reflect-metadata is added
    // by webpack.prod.config ProvidePlugin
    let ngCore = require('angular2/core');
    require('zone.js/dist/zone-microtask.min');
    ngCore.enableProdMode();
}
