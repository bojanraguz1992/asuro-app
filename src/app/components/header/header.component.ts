import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	template: `
		<header class="header m-b-300">
			<div class="container">
				<div class="header__container">
					<img
						class="header__logo-image"
						alt="Logo"
						src="https://cdn.shortpixel.ai/spai/ret_img/https://www.asuro.de/wp-content/uploads/2020/07/asuro_logo.svg"
					/>
					<div class="header__dropdown">
						<select
							#langselect
							(change)="translateService.use(langselect.value)"
						>
							<option
								[value]="language"
								*ngFor="
									let language of translateService.getLangs()
								"
							>
								{{ language | uppercase }}
							</option>
						</select>
					</div>
				</div>
			</div>
		</header>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	constructor(public translateService: TranslateService) {
		translateService.addLangs(['en', 'de']);

		translateService.setDefaultLang('en');

		const browserLanguage = translateService.getBrowserLang();
		translateService.use(
			browserLanguage?.match(/en|de/) ? browserLanguage : 'en'
		);
	}
}
