import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleHalaman } from './sample-halaman/sample-halaman';
import { Products } from './products/products';
import { Home } from './home/home';

const routes: Routes = [
    {path: 'sample-halaman', component: SampleHalaman},
    {path: '', component: Home},
    {path: 'products', component: Products},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
