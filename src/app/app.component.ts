import { Component } from '@angular/core';
import {TodoItem} from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
  <h1 class = 'app-title'>
    Welcome to {{title}}
  </h1>
  <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my todo list!';
}
