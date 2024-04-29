import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodosComponent } from "./week-todos/week-todos.component";


export const TODO_ROUTES: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'todo/week', component: WeekTodosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(TODO_ROUTES)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
