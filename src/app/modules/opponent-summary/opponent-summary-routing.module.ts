import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpponentSummaryComponent } from './opponent-summary.component';

const routes: Routes = [{ path: '', component: OpponentSummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpponentSummaryRoutingModule { }
