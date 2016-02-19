import { describe, beforeEachProviders } from 'angular2/testing';
import {provide} from 'angular2/core';

import {gamesInterfaceSpec} from '../interfaces/games.spec.i';
import {InMemoryGamesService} from '../../src/dao/mem/games.mem.service';
import {StaticInitializationService, IInitializationService} from '../../src/dao/init/static.init.service';

describe('DAO: GamesMock', () => {
    beforeEachProviders(() => [
        InMemoryGamesService,
        provide(IInitializationService, { useClass: StaticInitializationService }),
    ]);

    gamesInterfaceSpec(InMemoryGamesService);
});
