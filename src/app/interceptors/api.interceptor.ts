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
	constructor() {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const apiKey = 'EcbdaameJqHuyLM4IrcFetpFa6tjposh';
		const newReq = request.clone({
			headers: request.headers.set('apikey', apiKey)
		});
		return next.handle(newReq);
	}
}
