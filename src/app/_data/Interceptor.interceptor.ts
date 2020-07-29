
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { map, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HTTPStatus {
    private requestInFlight$: BehaviorSubject<boolean>;
    constructor() {
        this.requestInFlight$ = new BehaviorSubject(false);
    }
    setHttpStatus(inFlight: boolean) {
        this.requestInFlight$.next(inFlight);
    }
    getHttpStatus(): Observable<boolean> {
        return this.requestInFlight$.asObservable();
    }
}


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    private _requests = 0;
    constructor(
        private _status: HTTPStatus,
        private _router: Router
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        ++this._requests;
        this._status.setHttpStatus(true);
        
        
        let dupReq = req.clone({
                headers: req.headers
                    .set('Content-Type', "application/json")
                });
        
        if(req.url.indexOf("localhost") < 0){
            dupReq = req.clone({
                headers: req.headers
                    .set('Content-Type', "application/json")
            });
        }
    
        return next.handle(dupReq).pipe(
            map(event => {

                return event;
            }), catchError(error => {
                
                if (error.status === 0) {
                    console.log("401");
                    this._router.navigate(['']);
                }
                return throwError(error);
            }),
            finalize(() => {
                --this._requests;
                this._status.setHttpStatus(this._requests > 0);
            })
        );
    }
}


@NgModule({
    providers: [
        HTTPStatus,
        HttpsRequestInterceptor,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})


export class Interceptor { }