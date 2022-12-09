import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';


let routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    pathMatch: 'full'
  },
   { path: '**', redirectTo: '' }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
