import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const apiKey = 'EcbdaameJqHuyLM4IrcFetpFa6tjposh';
		const newReq = request.clone({
			headers: request.headers.set('apikey', apiKey)
		});

		// add apikey header only to the actual API request
		if (request.url.includes('api.apilayer.com')) {
			return next.handle(newReq);
		}

		return next.handle(request);
	}
}
