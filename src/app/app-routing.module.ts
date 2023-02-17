import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AuthService } from './Services/auth.service';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  {path:"products" , component:ProductsComponent , canActivate:[AuthService], data: { role: 'ADMIN' }},
  {path:"suppliers" , component:SuppliersComponent ,canActivate:[AuthService], data: { role: 'USER_NORMALE' }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
