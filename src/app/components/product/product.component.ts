import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  form = this.fb.group({
    rating: [],
    quality: [],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.product) {
      this.form.patchValue({
        rating: this.product.rating,
        quality: this.product.quality
      });
    }
  }
}
