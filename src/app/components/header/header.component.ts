import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
		<header class="header m-b-300">
			<div class="container">
				<div class="header--logo">
					<img
						class="header--logo-image"
						alt="Logo"
						src="https://cdn.shortpixel.ai/spai/ret_img/https://www.asuro.de/wp-content/uploads/2020/07/asuro_logo.svg"
					/>
				</div>
			</div>
		</header>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
