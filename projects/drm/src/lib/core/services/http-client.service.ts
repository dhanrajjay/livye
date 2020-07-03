// The above HTTPService which will return the observable as promise.
// If we need to cancel the previous pending http request, using a
// promise we will not able to reject. By, extending the httpClient
// we will be able to unsubscribe / cancel the pending request.
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClientService {
  private readonly mockData: Object;

  constructor(private http: HttpClient) {
  }

  get(url: string, options: any = {}): Observable<any> {
    return this.request(url, 'GET', options);
  }

  request(url, method, options, body?: any): Observable<any> {
    return body ? this.http.request(new HttpRequest(method, url, body, options)) :
      (this.http.request(method, url, options));
  }
}
