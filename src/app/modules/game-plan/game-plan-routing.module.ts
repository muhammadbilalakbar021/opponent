import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePlanComponent } from './game-plan.component';

const routes: Routes = [{ path: '', component: GamePlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamePlanRoutingModule { }
