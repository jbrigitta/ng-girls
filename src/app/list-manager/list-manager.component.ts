import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
    <div class = 'todo-app'>
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    <ul>
      <li *ngFor = 'let todoItem of todoList'>
        <app-todo-item [item] = 'todoItem'
                       (remove) = 'removeItem($event)'
                       (update) = 'updateItem($event.item, $event.changes)'>
        </app-todo-item>
      </li>
    </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
  todoListService: TodoListService;

  addItem(title: string){
    this.todoListService.addItem({title});
  }

  removeItem(item){
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes){
    this.todoListService.updateItem(item, changes);
  }

  constructor(todoListService: TodoListService) {
    this.todoList = todoListService.getTodoList();
    this.todoListService = todoListService;
  }

  ngOnInit() {
  }

}
