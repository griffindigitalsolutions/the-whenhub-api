import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FakeApiService {

    constructor() {
    }

    post() {
        return Observable.of({});
    }
    get() {
        return Observable.of({});
    }
    put() {
        return Observable.of({});
    }
    patch() {
        return Observable.of({});
    }
    delete() {
        return Observable.of({});
    }


} 