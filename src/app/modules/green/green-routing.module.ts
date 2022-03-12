import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenComponent } from './green.component';

const routes: Routes = [{ path: '', component: GreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreenRoutingModule { }
