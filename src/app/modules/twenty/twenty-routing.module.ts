import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwentyComponent } from './twenty.component';

const routes: Routes = [{ path: '', component: TwentyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwentyRoutingModule { }
