import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenComponent } from './ten.component';

const routes: Routes = [{ path: '', component: TenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenRoutingModule { }
