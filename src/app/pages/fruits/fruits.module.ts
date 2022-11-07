import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FruitsComponent } from './fruits.component';

const routes: Routes = [{
  path: '',
  component: FruitsComponent
}];
@NgModule({
  declarations: [
    FruitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FormsModule,
    PipesModule
  ]
})
export class FruitsModule { }
