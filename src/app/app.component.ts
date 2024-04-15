import { Component, Inject, inject } from '@angular/core';
import { FirstInjectionToken } from './injection tokens/first-token.injection-token';
import { TodoService } from './todo/service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Starting Advanced Topics';
  constructor( private todoService: TodoService) {
    // console.log('cc');

    todoService.logTodos();
  }
}
