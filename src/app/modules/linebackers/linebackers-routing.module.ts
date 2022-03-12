import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinebackersComponent } from './linebackers.component';

const routes: Routes = [{ path: '', component: LinebackersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinebackersRoutingModule { }
