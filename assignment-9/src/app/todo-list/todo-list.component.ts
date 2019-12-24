/*this component is responsible for getting the to-do array from app component and looping throught the array
and displaying each to-do by calling to-do component*/

import {Component, OnInit, Input, ViewChild, TemplateRef, ViewContainerRef, EventEmitter, Output} from '@angular/core';
import { Todo } from '../models/todo';
import {TodoService} from "../services/todo.service";
import {Template} from "@angular/compiler/src/render3/r3_ast";
import {allowNewBindingsForStylingContext} from "@angular/core/src/render3/styling/class_and_style_bindings";
// import { Component, OnInit, Input } from '@angular/core';
// import { Sticky } from './../models/sticky';
// import { StickyService } from './../services/sticky.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  //Takes to-do array as input
  @Input() todoList: Array<Todo>;

  todoService: TodoService;
  showPopUp : boolean = false;
  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  //If add button is pressed show the pop up box for entering to-do details else close the box
  togglePopUp = () => {
    this.showPopUp = !this.showPopUp;
  }

  //method to create a to-do when add button is clicked
  createTodo(title : string, content : string, dueDate : Date, completed : boolean){
    //paasing the user input to createTodo for creation of new to-do
    this.todoService.createTodo(title,content,dueDate,completed).subscribe(newTodo => {
      //setting attributes
      newTodo.title = title;
      newTodo.content = content;
      newTodo.dueDate = dueDate;
      newTodo.completed = completed;
      this.todoList.push(newTodo);
    })
  }

  //method to delete to-do when cross is clicked
  deleteTodo(todo: Todo){
    let id = todo.id;
    this.todoList = this.todoList.filter(todo => todo.id != id);
  }

  ngOnInit() {
  }

}
