import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {EdadGuard} from './guards/edad.guard'

const routes: Routes = [
  {path:'firstComponent',component:FirstComponent},
  {path:'secondComponent',component:SecondComponent,canActivate:[EdadGuard]},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
