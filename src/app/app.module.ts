import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { addAuthorizationGuards, AuthorizedRoutes, DevonfwAuthorizationModule, isAuthorizedInjectionToken } from '@devon4ng/authorization';
import { Dialog1Component } from './components/dialog1.component';
import { Dialog2Component } from './components/dialog2.component';
import { Dialog3Component } from './components/dialog3.component';
import { AccessDeniedComponent } from './components/access-denied.component';
import { AuthorizationService, Right } from './services/authorization.service';

const routes: AuthorizedRoutes<Right> = [
  {
    path: 'dialog1',
    component: Dialog1Component,
    permitAll: true
  },
  {
    path: 'dialog2',
    component: Dialog2Component,
    authorizeForRight: Right.User
  },
  {
    path: 'dialog3',
    component: Dialog3Component,
    authorizeForRight: Right.Admin
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    permitAll: true
  },
  {path: '', pathMatch: 'full', redirectTo: '/dialog1'}
];

@NgModule({
  declarations: [
    AppComponent,
    Dialog1Component,
    Dialog2Component,
    Dialog3Component,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DevonfwAuthorizationModule.forRoot({
      urlOnAuthorizationFailure: '/access-denied'
    })
  ],
  providers: [{provide: isAuthorizedInjectionToken, useClass: AuthorizationService}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    addAuthorizationGuards(router);
  }
}
