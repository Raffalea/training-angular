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
  submitted = false;
  loading = false;
  id!: string;
  isAddMode!: boolean;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      PRODUCT_CODE: ['',],
      PRODUCT_NAME: ['', Validators.required],
      CATEGORY: ['', Validators.required],
      PRICE: ['', [Validators.required, Validators.min(0)]]
    });

    if (!this.isAddMode) {
        this.productService.getById(this.id)
            .pipe(first())
            .subscribe(x => {
          this.form.patchValue(x);
        });
      }
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this.loading = true;
    if (this.isAddMode) {
        this.createData();
    } else {
         this.updateData();
    }

  }

  private createData(): void{
    this.productService.createData(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                alert('Data saved successfully!');
                this.router.navigate(['/product']);
            },
            error: err => {
                alert('There was an error!');
                console.error(err);
                this.loading = false;
            }
        });
  }

  private updateData(): void{
    this.productService.updateData(this.id, this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                alert('Data berhasil diperbarui!');
                this.router.navigate(['/product']);
            },
            error: err => {
                alert('Gagal memperbarui data.');
                console.error(err);
                this.loading = false;
            }
        });
  }

}
