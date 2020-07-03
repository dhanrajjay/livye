import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  private readonly mockData: Object;

  constructor(private http: HttpClient) {
    this.mockData = {};
  }

  setMockData(mockData: Object, url: string, error?: boolean, status?: number) {
    this.mockData[url] = {
      data: mockData,
      error: error,
      status: status
    };
  }

  post(url: string, options: any = {}, body: any = {}): Observable<any> {
    return this.request(url, 'POST', options, body);
  }

  get(url: string, options: any = {}): Observable<any> {
    return this.request(url, 'GET', options);
  }

  put(url: string, options: any = {}, body?: any): Observable<any> {
    return this.request(url, 'PUT', options, body);
  }

  patch(url: string, options: any = {}, body?: any): Observable<any> {
    return this.request(url, 'PATCH', options, body);
  }

  delete(url: string, options: any = {}): Observable<any> {
    return this.request(url, 'DELETE', options);
  }

  request(url: string, method: string, options?: any, body?: any): Observable<any> {
    return Observable.create((observer: any) => {
      if (this.mockData && this.mockData[url]) {
        if (this.mockData[url].error) {
          observer.error(new HttpErrorResponse({
            error: this.mockData[url].data,
            status: this.mockData[url].status
          }));
        } else {
          observer.next(this.mockData[url].data);
        }
      } else {
        let req;
        if (body) {
          req = this.http.request(new HttpRequest(method, url, body, options));
        } else {
          req = this.http.request(new HttpRequest(method, url, options));
        }
        req.toPromise()
          .then(response => {
            observer.next(response['body']);
            observer.complete();
          }, error => {
            observer.error(error['error'] || error);
          });
      }
    });
  }
}
