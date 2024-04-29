import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";


export const CV_ROUTES: Routes = [
  {
    path: '',
    component: CvComponent,
  },
  { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
  { path: ':id', component: DetailsCvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(CV_ROUTES)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
