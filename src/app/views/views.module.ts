import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ViewsComponent,],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
