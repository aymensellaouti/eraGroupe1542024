import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodosComponent } from "./week-todos/week-todos.component";
import { TODO_ROUTES, TodoRoutingModule } from "./todo-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@NgModule({
  // Ce sont les parties vues qui m'appartienne
  declarations: [WeekTodosComponent, TodoComponent],
  // Les modules nécessaires pour mon fonctionnement
  imports: [
    FormsModule,
    CommonModule,
    TodoRoutingModule
  ],
  // Ce que je partage avec les autres modules
  exports: [],
  // Ce que je fournie
  providers: [],
})
export class TodoModule {}
