import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VconversionComponent } from './components/vconversion/vconversion.component';
import { VhistorialComponent } from './components/vhistorial/vhistorial.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vconversion',
    pathMatch: 'full'
  },

  {
    path: 'vconversion',
    component: VconversionComponent
  },

  {
    path: 'vhistorial',
    component: VhistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [VconversionComponent, VhistorialComponent]