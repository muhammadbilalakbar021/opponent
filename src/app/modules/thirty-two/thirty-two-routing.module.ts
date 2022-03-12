import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirtyTwoComponent } from './thirty-two.component';

const routes: Routes = [{ path: '', component: ThirtyTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirtyTwoRoutingModule { }
