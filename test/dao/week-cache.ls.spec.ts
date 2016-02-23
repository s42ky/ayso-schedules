import {describe, beforeEachProviders} from 'angular2/testing';
import {provide} from 'angular2/core';

import {weekCacheInterfaceSpec} from '../interfaces/week-cache.spec.i';
import {StaticInitializationService, IInitializationService} from '../../src/dao/init/static.init.service';
import {LocalStorageWeeksService} from '../../src/dao/ls/weeks.ls.service';
import {MOCK_LOCAL_STORAGE_PROVIDER} from '../mocks/local-storage.mock';

describe('DAO: LocalStorageWeekCache', () => {
    beforeEachProviders(() => [
        provide(IInitializationService, { useClass: StaticInitializationService }),
        MOCK_LOCAL_STORAGE_PROVIDER,
    ]);
    weekCacheInterfaceSpec(LocalStorageWeeksService, StaticInitializationService);
});
