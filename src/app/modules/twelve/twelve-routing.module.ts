import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwelveComponent } from './twelve.component';

const routes: Routes = [{ path: '', component: TwelveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwelveRoutingModule { }
