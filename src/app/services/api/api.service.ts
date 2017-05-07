import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../services/config/config.service';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  private _headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private _http: Http, private _configService: ConfigService) {

  }

  /**
   * Make POST request
   * @argument { url, body }
   * @return Observable<Response>
   */
  post(data): Observable<Response> {
    if (!data.url) {
      return Observable.empty();
    }

    //headers get appended so we have more and more crap... so just start again
    this._headers = new Headers({ 'Content-Type': 'application/json' });

    // headers should be appended if they are set from the request
    if (data.headers) {
      for (var key in data.headers) {
        this._headers.append(key, data.headers[key]);
      }
    }

    //prepare the RequestOptions
    let requestOptions = new RequestOptions({ headers: this._headers });

    return this._http.post(data.url, data.body, requestOptions)
      .map((res: Response) => {
        //if status is 204 
        if (res.status == 204) {
          //on 404 we return standard data missing object
          return { 'data': false, 'dataMissing': true, 'dataError': false };
        } else {
          return res.json(); //this would return errors as well
        }
      }
      )
    //delay for testing
    // .delay(new Date(Date.now() + 2000));
  }

  /**
   * Make GET request
   * @argument data { url, headers }
   * @return Observable<Response>
   */
  get(data): Observable<Response> {
    if (!data.url) {
      return Observable.empty();
    }
    // headers are set from those making the request [for now]
    if (data.headers) {
      this._headers = new Headers({ 'Content-Type': 'application/json' });
      for (var key in data.headers) {
        this._headers.append(key, data.headers[key]);
      }
    }

    //prepare the RequestOptions
    let requestOptions = new RequestOptions({ headers: this._headers });

    return this._http.get(data.url, requestOptions).map((res: Response) => {
      //if status is 204 
      if (res.status == 204) {
        //on 204 we return standard data missing object
        return { 'data': false, 'dataMissing': true, 'dataError': false };
      } else {
        return res.json(); //this would return errors as well
      }
    });

  }

  /**
   * Make DELETE request
   * @argument data { url, headers }
   * @return Observable<Response>
   */
  delete(data): Observable<Response> {
    if (!data.url) {
      return Observable.empty();
    }
    //prepare the RequestOptions
    let requestOptions = new RequestOptions({ headers: this._headers });

    return this._http.delete(data.url, requestOptions).map(res => res.json());
  }


  /**
   * Make PATCH request
   * @argument data { url, headers }
   * @return Observable<Response>
   */
  patch(data): Observable<Response> {
    if (!data.url || !data.content) {
      return Observable.empty();
    }

    //prepare the RequestOptions
    let requestOptions = new RequestOptions({ headers: this._headers });

    return this._http.patch(data.url, data.content, requestOptions).map(res => res.json());

  }
  /**
   * Make PUT request
   * @argument data { url, headers }
   * @return Observable<Response>
   */
  put(data): Observable<Response> {
    if (!data.url || !data.content) {
      return Observable.empty();
    }

    //prepare the RequestOptions
    let requestOptions = new RequestOptions({ headers: this._headers });

    return this._http.put(data.url, data.content, requestOptions).map(res => res.json());

  }
}