import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegitableComponent } from './vegitable.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [{
  path: '',
  component: VegitableComponent
}];

@NgModule({
  declarations: [
    VegitableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FormsModule,
    PipesModule
  ]
})
export class VegitableModule { }
