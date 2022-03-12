import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YellowComponent } from './yellow.component';

const routes: Routes = [{ path: '', component: YellowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YellowRoutingModule { }
