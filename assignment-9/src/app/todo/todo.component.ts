//this component is responsible for displaying individual divs for to-do
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../models/todo';
import {TodoService} from "../services/todo.service";
import {TodoListComponent} from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() newTodoEmitted = new EventEmitter<Todo>();
  showPopUp : boolean = false;
  completed : boolean;
  todoService : TodoService;
  constructor(todoService : TodoService) {
    this.todoService = todoService;
  }

  //to check if popUp box has to be opened or not
  togglePopUp = () => {
    this.showPopUp = !this.showPopUp;
  }

  //this method is for deleting the to-do and a call is made in to-doList component to remove the to-do from array
  deleteTodo(){
    this.todoService.deleteTodo(this.todo).subscribe(todo => {
      this.newTodoEmitted.emit(this.todo);
    });
  }

  //this method will make the to-to as complete if the checkbox is clicked
  toggleComplete(){
    this.completed = !this.completed;
    this.todo.completed = this.completed;
    this.todoService.updateTodo(this.todo).subscribe(todo => {
    });
  }

  ngOnInit() {
    if(this.todo.completed){
      this.completed = true;
    } else{
      this.completed = false;
    }
  }
}
