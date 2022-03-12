import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { GamePlanRoutingModule } from "./game-plan-routing.module";
import { GamePlanComponent } from "./game-plan.component";

@NgModule({
  declarations: [GamePlanComponent],
  imports: [CommonModule, GamePlanRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class GamePlanModule {}
