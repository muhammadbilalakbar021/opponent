import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefensiveComponent } from './defensive.component';

const routes: Routes = [{ path: '', component: DefensiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefensiveRoutingModule { }
