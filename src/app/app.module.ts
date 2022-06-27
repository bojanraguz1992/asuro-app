import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { interceptors } from './interceptors';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		CommonModule,
		HttpClientModule
	],
	providers: [interceptors],
	exports: [HeaderComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
