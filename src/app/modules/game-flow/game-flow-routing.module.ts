import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFlowComponent } from './game-flow.component';

const routes: Routes = [{ path: '', component: GameFlowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameFlowRoutingModule { }
