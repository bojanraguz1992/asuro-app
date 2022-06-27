import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CurrencyService } from './services/currency.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	time = new Date();
	datePipeFormat = 'MMM d, y, h:mm:ss a';
	conversionRate$!: Observable<number | undefined>;
	symbols$!: Observable<{ [key: string]: string }>;
	convertedAmount$!: Observable<number>;
	currencyForm!: FormGroup;
	constructor(
		private _currencyService: CurrencyService,
		private _fb: FormBuilder
	) {
		this.currencyForm = this._fb.group({
			amount: ['1', Validators.required],
			fromCurrency: ['', Validators.required],
			toCurrency: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		// fetch all available symbols
		this.symbols$ = this._currencyService.symbols$;

		this.conversionRate$ = this._currencyService.conversionRate$;
	}

	convert() {
		this.convertedAmount$ = this._currencyService
			.convert(
				this.amount?.value,
				this.fromCurrency?.value,
				this.toCurrency?.value
			)
			.pipe(map((res) => res.result));
	}

	get amount() {
		return this.currencyForm.get('amount');
	}

	get fromCurrency() {
		return this.currencyForm.get('fromCurrency');
	}

	get toCurrency() {
		return this.currencyForm.get('toCurrency');
	}

	numberOnly(event: any): boolean {
		const charCode = event.which ? event.which : event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}
}
