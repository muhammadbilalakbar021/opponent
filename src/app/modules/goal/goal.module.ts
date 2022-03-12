import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { GoalRoutingModule } from "./goal-routing.module";
import { GoalComponent } from "./goal.component";

@NgModule({
  declarations: [GoalComponent],
  imports: [CommonModule, GoalRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class GoalModule {}
