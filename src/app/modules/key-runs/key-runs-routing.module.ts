import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyRunsComponent } from './key-runs.component';

const routes: Routes = [{ path: '', component: KeyRunsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyRunsRoutingModule { }
