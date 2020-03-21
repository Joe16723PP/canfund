//use for set header of each request

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../services/authService/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.auth.UserValue;
        if (currentUser && currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: currentUser.uid
                }
            });
        }
        return next.handle(request);
    }
}
