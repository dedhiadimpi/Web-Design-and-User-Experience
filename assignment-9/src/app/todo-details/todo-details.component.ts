//This component is responsible in displaying details of a to-do and editing the same
import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../models/todo";
import {TodoService} from "../services/todo.service";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  @Input() show = false;
  @Input() closeCallback = () => {};
  @Input() todo : Todo;

  todoService : TodoService;
  todoListComponent : TodoListComponent;
  todoTitle : string;
  todoContent : string;
  datepipe : DatePipe;
  convertedDate : string;

  constructor(todoService : TodoService, todoListComponent : TodoListComponent, datepipe : DatePipe) {
    this.todoService = todoService;
    this.todoListComponent = todoListComponent;
    this.datepipe = datepipe;
  }

  //this method is called when save button is clicked
  saveData(){
    console.log('todoTitle: '+this.todoTitle+" lenght: "+this.todoTitle.length);
    if(this.todoTitle.length <= 0){
      //validation as title is required
      alert('Please enter Title');
    }else {
      //If save button is clicked after Add button (Addition of new to-do)
      if (this.todo == undefined) {
        //Create the to-do
        this.todoListComponent.createTodo(this.todoTitle, this.todoContent, new Date(this.convertedDate), false);
        this.todoTitle = '';
        this.todoContent = '';
        let today = new Date();
        let dueDate = new Date().setDate(today.getDate() + 5);
        this.convertedDate = this.datepipe.transform(dueDate, 'yyyy-MM-ddTHH:mm');
      }
      //If save button is clicked for a particular to-do (If a to-o is updated)
      else {
        // change the attributes of to-do as per input given by the user
        console.log(this.convertedDate);
        this.todo.title = this.todoTitle;
        this.todo.content = this.todoContent;
        this.todo.dueDate = new Date(this.convertedDate);
        this.todoService.updateTodo(this.todo).subscribe(todo => {
        });
      }
      //Close the box once operations are performed
      this.closeCallback();
    }
  }

  //Addition of details in the text boxes when a to-do is clicked
  ngOnInit() {
    if(this.todo == undefined){
      this.todoTitle = '';
      this.todoContent = '';
      let today = new Date();
      let dueDate = new Date().setDate(today.getDate()+5);
      this.convertedDate = this.datepipe.transform(dueDate,'yyyy-MM-ddTHH:mm');
    }else {
      this.todoTitle = this.todo.title;
      this.todoContent = this.todo.content;
      this.convertedDate = this.datepipe.transform(this.todo.dueDate,'yyyy-MM-ddTHH:mm');
    }
  }

}
