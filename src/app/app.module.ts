import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { NgModule, Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';

/** Components */
import { AppComponent } from './app.component';
import { AnoneTopComponent } from './top/app.top.component.js';
import { AnoneTopHeroshotComponent } from './top/app.top.heroshot.component.js';
import { AnoneTopSignupComponent } from './top/app.top.signup.component.js';
import { AnoneProfileComponent } from './profile/app.profile.component.js';

/** Directive */
import { HeaderDirective } from './app.header.component.js';
import { FooterDirective } from './app.footer.component.js';

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AnoneTopComponent,
    AnoneTopHeroshotComponent,
    AnoneTopSignupComponent,
    AnoneProfileComponent,

    FooterDirective,
    HeaderDirective
  ],
  imports: [
  	NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
			// {
			// 	path: '',
			// 	redirectTo: '/profile',
			// 	pathMatch: 'full'
			// },
    		{
    			path: '',
				component: AnoneTopComponent
    		},
    		{
    			path: 'profile',
				component: AnoneProfileComponent
    		}
    	])
    // UIRouterModule.forRoot({ states: [ topPageState, profileState ], useHash: true })
  ],
  exports: [
    AnoneTopHeroshotComponent,
    AnoneTopSignupComponent,
    FooterDirective,
    HeaderDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
