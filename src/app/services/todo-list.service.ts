import {Injectable} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {StorageService} from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem [] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey)
    || defaultTodoList;
  }

  getTodoList(){
    return this.todoList;
  }

  addItem(item: TodoItem){
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, change){
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...change};
    this.saveList();
  }

  deleteItem(item: TodoItem){
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  saveList(){
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
}
