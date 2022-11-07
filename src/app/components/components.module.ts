import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductComponent } from './product/product.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    ProductComponent
  ],
  exports:[HeaderComponent,FooterComponent,ProductComponent],
  imports: [
    CommonModule,
    NgxStarRatingModule ,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class ComponentsModule { }
