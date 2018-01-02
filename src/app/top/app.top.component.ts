import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from "@uirouter/angular";

import { AnoneTopHeroshotComponent } from './app.top.heroshot.component.js';
import { AnoneTopSignupComponent } from './app.top.signup.component.js';

@Component({
  // selector: 'app-root',
  templateUrl: './app.top.component.html'
  // styleUrls: ['./app.component.css']
})
export class AnoneTopComponent {
  title = 'app';
}
