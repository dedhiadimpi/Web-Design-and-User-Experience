//Defining To-do class
export class Todo {
    id: Number;
    title: string;
    content: string;
    dueDate: Date;
    createdDate: Date;
    modifiedDate: Date;
    completed: boolean;
    constructor(title: string, content: string, dueDate: Date, completed: boolean) {
        this.title = title;
        this.content = content;
        this.dueDate = dueDate;
        this.completed = completed;
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }
}
