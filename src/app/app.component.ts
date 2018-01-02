import { Component, Directive } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { UIRouterModule } from "@uirouter/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
 	title = 'app';
	constructor() {
		console.log('AppComponent constructor');
	}
}
