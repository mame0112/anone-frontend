import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from "@uirouter/angular";

@Component({
  selector: 'app-top-signup',
  templateUrl: './app.top.signup.component.html'
  // styleUrls: ['./app.component.css']
})
export class AnoneTopSignupComponent {
  title = 'app';
  // disabled = false;
  // message:string = "test";

  tryButtonPressed() {
  	console.log("Pressed");
  }
}
