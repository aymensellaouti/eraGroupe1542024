import { Inject, Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from '../../services/logger.service';
import { uuidInjectionToken } from 'src/app/injection tokens/uuid.injection-token';

let n = 1;

@Injectable({
  providedIn: 'root', //Angular 6
})
export class TodoService {
  private todos: Todo[] = [];
  private uuid = inject(uuidInjectionToken);
  private loggerService = inject(LoggerService);
  constructor() {}
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    todo.id = this.uuid();
    this.todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {
    this.loggerService.logger(this.todos);
  }

 /**
  *
  * @param x
  * @param y
  * @returns
  */
  division(x: number, y: number): number {
    if (!y) {
      throw new Error('division par zero');
    }
    return x / y;
  }
}
