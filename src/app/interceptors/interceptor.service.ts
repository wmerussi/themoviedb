import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  apiKey = '1ef4670163c97d8bab180b1b47e38049';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const interceptedRequest = request.clone({
      params: request.params.set(
        'api_key', this.apiKey
      ),
    });

    return next.handle(interceptedRequest);
  }
}
