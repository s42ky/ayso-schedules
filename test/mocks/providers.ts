import {provide} from 'angular2/core';

export * from './router';
import {InMemoryGamesService, GamesDAO} from '../../src/dao/mem/games.mem.service';
import {InMemoryTeamsService, TeamsDAO} from '../../src/dao/mem/teams.mem.service';
import {InMemoryWeeksService, WeekCacheInterface} from '../../src/dao/mem/weeks.mem.service';
import {InMemorySettingsService, SettingsDAO} from '../../src/dao/mem/settings.mem.service';
import {Component} from 'angular2/core';

let MOCK_DAO_PROVIDERS = [
    provide(GamesDAO, { useClass: InMemoryGamesService }),
    provide(TeamsDAO, { useClass: InMemoryTeamsService }),
    provide(SettingsDAO, {useClass: InMemorySettingsService}),
    provide(WeekCacheInterface, { useClass: InMemoryWeeksService}),
];

export { MOCK_DAO_PROVIDERS, GamesDAO, TeamsDAO, SettingsDAO, WeekCacheInterface };
