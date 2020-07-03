import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpResponse,
    HttpRequest,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class InfynectHttpInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return <any>next.handle(request).pipe(map(res => {
            if (res instanceof HttpResponse) {
                return res;
            }
        }), catchError((err: HttpErrorResponse) => {
            if (err.status === 401) {
                this.http401Interceptor(err);
            }
            if (err.status === 403 || err.status === 409) {
                this.http403Interceptor(err);
            }
            throw err;
        }));
    }

    private http401Interceptor(err) {
        console.log(err);
    }

    private http403Interceptor(err) {
        console.log(err);
    }
}
