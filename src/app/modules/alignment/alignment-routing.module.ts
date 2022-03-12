import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlignmentComponent } from './alignment.component';

const routes: Routes = [{ path: '', component: AlignmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlignmentRoutingModule { }
