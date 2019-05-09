import { Component } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  template: `
    <h2>Access Denied</h2>
    <p>Back to <a routerLink="/dialog1">home</a></p>`
})
export class AccessDeniedComponent {
}
