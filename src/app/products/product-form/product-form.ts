import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
  form!: FormGroup;
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      PRODUCT_CODE: ['',],
      PRODUCT_NAME: ['', Validators.required],
      CATEGORY: ['', Validators.required],
      PRICE: ['', [Validators.required, Validators.min(0)]]
    });

  }
}
