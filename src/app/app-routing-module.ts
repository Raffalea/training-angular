import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleHalaman } from './sample-halaman/sample-halaman';
import { Products } from './products/products';
import { Home } from './home/home';
import { ProductForm } from './products/product-form/product-form';
import { CategoryProduct } from './category-product/category-product';
import { CategoryForm } from './category-product/category-form/category-form';

const routes: Routes = [
    {path: 'sample-halaman', component: SampleHalaman},
    {path: '', component: Home},
    {path: 'product', component: Products},
    {path: 'product/form', component: ProductForm},
    {path: 'Product/Form/:id', component: ProductForm},
    {path: 'category', component: CategoryProduct},
    {path: 'category/form', component: CategoryForm},
    {path: 'Category/Form/:id', component: CategoryForm},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
