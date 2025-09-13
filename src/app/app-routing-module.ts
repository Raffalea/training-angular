import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleHalaman } from './sample-halaman/sample-halaman';
import { Products } from './products/products';
import { Home } from './home/home';
import { ProductForm } from './products/product-form/product-form';

const routes: Routes = [
    {path: 'sample-halaman', component: SampleHalaman},
    {path: '', component: Home},
    {path: 'product', component: Products},
    {path: 'product/form', component: ProductForm},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
