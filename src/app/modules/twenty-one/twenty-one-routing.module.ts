import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwentyOneComponent } from './twenty-one.component';

const routes: Routes = [{ path: '', component: TwentyOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwentyOneRoutingModule { }
