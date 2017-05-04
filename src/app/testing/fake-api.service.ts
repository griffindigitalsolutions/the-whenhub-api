import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FakeApiService {

    constructor() {
    }

    post() {
        return Observable.empty();
    }
    get() {
        return Observable.empty();
    }
    put() {
        return Observable.empty();
    }
    patch() {
        return Observable.empty();
    }
    delete() {
        return Observable.empty();
    }


} 