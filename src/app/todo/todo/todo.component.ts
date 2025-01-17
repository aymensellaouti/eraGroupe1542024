import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent {
  todos: Todo[] = [];
  todo = new Todo();
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
    return 5;
    // setTimeout(() => console.log('1'), 1500);
    // console.log('2');
    // this.todoService.division()
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
