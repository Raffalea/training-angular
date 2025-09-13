import { Component } from '@angular/core';
import { CategoryProductService } from '../../Service/category-product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-category-form',
  standalone: false,
  templateUrl: './category-form.html',
  styleUrl: './category-form.css'
})
export class CategoryForm {
  form!: FormGroup;
  submitted = false;
  loading = false;
  id!: string;
  isAddMode!: boolean;

    constructor(
      private categoryproductService: CategoryProductService,
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute
    ) {}

     ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      CATEGORY_CODE: ['',],
      CATEGORY_NAME: ['', Validators.required],
    });

    if (!this.isAddMode) {
        this.categoryproductService.getById(this.id)
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
    this.categoryproductService.createData(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                alert('Data saved successfully!');
                this.router.navigate(['/category']);
            },
            error: err => {
                alert('There was an error!');
                console.error(err);
                this.loading = false;
            }
        });
  }

  private updateData(): void{
    this.categoryproductService.updateData(this.id, this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                alert('Data berhasil diperbarui!');
                this.router.navigate(['/category']);
            },
            error: err => {
                alert('Gagal memperbarui data.');
                console.error(err);
                this.loading = false;
            }
        });
  }

}
