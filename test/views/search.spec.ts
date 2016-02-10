import {provide} from 'angular2/core';
import {
    describe,
    beforeEachProviders,
    fdescribe,
    it,
    xdescribe,
    xit,
} from 'angular2/testing';

import {
    MOCK_DAO_PROVIDERS, MOCK_ROUTER_PROVIDERS
} from '../mocks/providers';
import {ensureViewExists} from '../util/viewUtil';

import {SearchView} from '../../src/views/search';

describe('View: Search', () => {
    beforeEachProviders(() => [
        ...MOCK_ROUTER_PROVIDERS,
        ...MOCK_DAO_PROVIDERS,
        SearchView,
    ]);

    ensureViewExists(SearchView);
});
