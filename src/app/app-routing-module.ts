import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleHalaman } from './sample-halaman/sample-halaman';
import { Product } from './product/product';

const routes: Routes = [
    {path: 'sample-halaman', component: SampleHalaman},
    {path: 'product', component: Product},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
