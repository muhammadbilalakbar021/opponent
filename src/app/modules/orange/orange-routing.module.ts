import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrangeComponent } from './orange.component';

const routes: Routes = [{ path: '', component: OrangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrangeRoutingModule { }
