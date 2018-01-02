import { Component } from '@angular/core';

@Component({
  selector: 'footer-directive',
  templateUrl: './footer-directive.html'
})

export class FooterDirective {
	constructor() {
		console.log('FooterDirective constructor');
	}
}