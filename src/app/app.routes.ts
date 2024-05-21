import { Routes } from '@angular/router';
import { PruebaComponent } from './pages/persona/prueba/prueba.component';
import { DetalleDeudaComponent } from './pages/persona/detalle-deuda/detalle-deuda.component';

export const routes: Routes = [
  {path:'', component: PruebaComponent},
  {path: 'test', component: DetalleDeudaComponent}
];
