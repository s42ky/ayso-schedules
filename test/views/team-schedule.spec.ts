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
    MOCK_DAO_PROVIDERS, MOCK_ROUTER_PROVIDERS, MockComponent
} from '../mocks/providers';
import {ensureViewExists} from '../util/viewUtil';

import {TitleBarComponent} from '../../src/comp/title-bar.component';
import {TeamScheduleView} from '../../src/views/team-schedule';
import SingleTeamGameListComponent from '../../src/comp/games1-list.component';

describe('View: TeamSchedule', () => {
    beforeEachProviders(() => [
        ...MOCK_ROUTER_PROVIDERS,
        ...MOCK_DAO_PROVIDERS,
        TeamScheduleView,
    ]);

    ensureViewExists(TeamScheduleView, tcb => {
        return tcb.overrideDirective(TeamScheduleView, TitleBarComponent, MockComponent)
                  .overrideDirective(TeamScheduleView, SingleTeamGameListComponent, MockComponent);
    });
});