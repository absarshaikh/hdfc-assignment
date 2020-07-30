import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "landing", component: LandingComponent },
  { path: "table", component: DatatableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
