import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElevenComponent } from './eleven.component';

const routes: Routes = [{ path: '', component: ElevenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElevenRoutingModule { }
