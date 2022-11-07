import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path:'home',
    component: LandingPageComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'fruit',
    loadChildren:()=>import("./pages/fruits/fruits.module").then(f=>f.FruitsModule)
  },
  {
    path:'vegitable',
    loadChildren:()=>import("./pages/vegetables/vegitable.module").then(v=>v.VegitableModule)
  },
  {
    path:'**',
    redirectTo:'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
