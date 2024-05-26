import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CoreFacede } from './loading.store.service';
import { NotificationService } from './notification.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  constructor(
    private loadingState: CoreFacede,
    private notification: NotificationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingState.dispatch({ type: 'loading', payload: true });
    const reqClone = this.addToken(req, localStorage.getItem('token'));
    return next.handle(reqClone).pipe(
      tap((evt) => {
        evt instanceof HttpResponse &&
          this.loadingState.dispatch({ type: 'loading', payload: false });
      }),
      catchError(({ error: { error }, status }) => {
        switch (status) {
          default:
            this.notification.showError(error);
            this.loadingState.dispatch({ type: 'loading', payload: false });
        }
        return throwError(() => error);
      })
    );
  }

  addToken(req: HttpRequest<any>, token: string | null) {
    const opt = token ? { setHeaders: { Authorization: token } } : {};
    return req.clone({ ...opt, withCredentials: true });
  }
}
