/*this is the first component that is responsible in getting to-dos from the server,
storing it in a array and calling the to-do-list component for displaying the to-dos*/

import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoList: Array<Todo>;

  constructor(todoService: TodoService) {
    //calling get service to fetch all to-dos and storing it in an array
      todoService.getTodos().subscribe(todos => {
      this.todoList = todos;
    });
  }
}
