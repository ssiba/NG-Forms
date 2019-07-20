import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactive',
    pathMatch: 'full',
  },
  {
    path: 'reactive',
    component: ReactiveFormsComponent
  },
  {
    path: 'temp-driven',
    component: TemplateDrivenFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
