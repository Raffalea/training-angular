import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CategoryProductService } from '../Service/category-product.service';


@Component({
  selector: 'app-category-product',
  standalone: false,
  templateUrl: './category-product.html',
  styleUrl: './category-product.css'
})
export class  CategoryProduct {
  faPlus = faPlus;
  faPencil = faPencil;
  faTrash = faTrash;
  CategoryProduct: any[] = [];
    constructor(
    private categoryproductService: CategoryProductService
    ) {}

    ngOnInit(): void {
    this.categoryproductService.getAll().subscribe({
      next: (data) => this.CategoryProduct = data,
      error: (err) => console.error('Error loading products', err),
    });
  }

 deleteCategoryProduct(id: string): void {
    if (confirm('Are you sure to delete this record?')) {
      this.categoryproductService.deleteData(id).subscribe({
        next: () => {
          alert('Category deleted successfully.');
          this.ngOnInit(); // Refresh the product list
        },
        error: (err) => {
          if (err.status === 204) {
            alert('Data berhasil dihapus.');
            this.ngOnInit(); // Refresh the product list
          } else {
            alert('Gagal menghapus data. Silakan coba lagi.');
            console.error('Error deleting category', err);
            this.ngOnInit(); // Refresh the product list
          }
        }
      });
    }

  }
}
