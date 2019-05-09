import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog2',
  template: `
    <h2>Dialog 2</h2>
    <p>Back to <a routerLink="/dialog1">home</a></p>`
})
export class Dialog2Component {
}
