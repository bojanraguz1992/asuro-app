import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { map, Observable } from 'rxjs';
import { ConvertModel } from '../models/convert.model';
import { SymbolModel } from '../models/symbol.model';

@Injectable({
	providedIn: 'root'
})
export class CurrencyService {
	private readonly API_URL = 'https://api.apilayer.com/fixer';
	private _conversionRate = new BehaviorSubject<number | undefined>(
		undefined
	);
	readonly conversionRate$ = this._conversionRate.asObservable();

	constructor(private _httpClient: HttpClient) {}

	convert(
		amount: string | undefined,
		from: string | undefined,
		to: string | undefined
	): Observable<ConvertModel> {
		const query = `/convert?amount=${amount}&to=${to}&from=${from}`;

		return this._httpClient
			.get<ConvertModel>(`${this.API_URL}${query}`)
			.pipe(
				tap((response) => this._conversionRate.next(response.info.rate))
			);
	}

	symbols$: Observable<{ [key: string]: string }> = this._httpClient
		.get<SymbolModel>(`${this.API_URL}/symbols`)
		.pipe(map((response) => response.symbols));
}
