import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { TablePageComponent } from './table-page/table-page.component';

const routes: Routes = [
  {
    path:'',
    component: TablePageComponent,
  },
  {
    path: 'table',
    component: TablePageComponent
  },
  {
    path: 'form',
    component: FormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
