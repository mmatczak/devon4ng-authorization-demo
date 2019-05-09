import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog1',
  template: `
    <h2>Dialog 1</h2>
    <p>Go to <a routerLink="/dialog2">Dialog 2</a></p>
    <p>Go to <a routerLink="/dialog3">Dialog 3</a></p>`
})
export class Dialog1Component {
}
