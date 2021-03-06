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
    MOCK_DAO_PROVIDERS, MOCK_ROUTER_PROVIDERS,
    MockComponent, RouteParams,
    GamesDAO, TeamsDAO,
} from '../mocks/providers';
import {ensureViewExists} from '../util/viewUtil';

import GameDetail from '../../src/views/game-detail';

describe('View: GameDetail', () => {
    beforeEachProviders(() => [
        ...MOCK_ROUTER_PROVIDERS,
        ...MOCK_DAO_PROVIDERS,
        provide(GameDetail, {deps: [RouteParams, GamesDAO, TeamsDAO]}),
    ]);

    ensureViewExists(GameDetail);
});
