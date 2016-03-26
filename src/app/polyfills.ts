// Polyfills
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)

// import 'ie-shim'; // Internet Explorer
// import 'es6-shim';
// import 'es6-promise';
// import 'es7-reflect-metadata';

// Prefer CoreJS over the polyfills above
import 'core-js';

import 'zone.js/lib/browser/browser';

// see workaround below
if ('production' === ENV) {
    // Production

} else {
    // Development

    Error.stackTraceLimit = Infinity;

    /* tslint:disable */
    require('zone.js/dist/long-stack-trace-zone');
    /* tslint:enable */

}
