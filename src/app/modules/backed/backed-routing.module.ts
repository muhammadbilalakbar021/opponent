import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackedComponent } from './backed.component';

const routes: Routes = [{ path: '', component: BackedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackedRoutingModule { }
