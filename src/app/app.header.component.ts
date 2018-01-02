import { Component } from '@angular/core';

@Component({
  selector: 'header-directive',
  templateUrl: './header-directive.html'
})

export class HeaderDirective {
	constructor() {
		console.log('HeaderDirective constructor');
	}
}