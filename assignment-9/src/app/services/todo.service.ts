//contains all http call request
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo';

import {environment} from './../../environments/environment';
import {Observable} from 'rxjs';
import {combineAll} from "rxjs/operators";

@Injectable()
export class TodoService {
//API URLs
  todoResource: string;
  todoResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    //initializing API URLs
    this.todoResource = 'todo';
    this.todoResourceURL = `${environment.serverBaseURL}/${this.todoResource}`;
  }

  //method to get list of to-dos
  getTodos(): Observable<Array<Todo>> {
    //http call to get all to-dos
    return this.http.get<Array<Todo>>(this.todoResourceURL);
  }

  //method to create a new to-do
  createTodo(title:string,content:string,dueDate:Date,completed:boolean): Observable<Todo> {
    let newTodo: Todo;
    //creation of new to-do object
    newTodo = new Todo(title,content,dueDate,completed);
    return this.http.post<Todo>(this.todoResourceURL, newTodo);
  }

  //method to update a to-do
  updateTodo(todo: Todo): Observable<Todo> {
    let todoPutResourceURL = `${this.todoResourceURL}/${todo.id}`;
    //http call for updating to-do
    return this.http.put<Todo>(todoPutResourceURL, todo);
  }

  //method to delete a to-do
  deleteTodo(todo : Todo): Observable<Todo>{
    let todoPutResourceURL = `${this.todoResourceURL}/${todo.id}`;
    //http call for deleting the to-do
    return this.http.delete<Todo>(todoPutResourceURL);
  }
}
