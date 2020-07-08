import { ActivatedRoute, convertToParamMap, ParamMap, Params } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
    // Use a ReplaySubject to share previous values with subscribers
    // and pump new values into the `paramMap` observable
    private subject: ReplaySubject<ParamMap> = new ReplaySubject<ParamMap>();

    constructor(initialParams?: Params) {
        this.setParamMap(initialParams);
    }

    /** The mock paramMap observable */
    readonly paramMap: Observable<ParamMap> = this.subject.asObservable();

    /** Set the paramMap observables's next value */
    setParamMap(params?: Params): void {
        this.subject.next(convertToParamMap(params));
    }
}

export const ACTIVATED_ROUTE_STUB_PROVIDER = { provide: ActivatedRoute, useClass: ActivatedRouteStub };
