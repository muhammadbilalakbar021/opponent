import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameFlowRoutingModule } from "./game-flow-routing.module";
import { GameFlowComponent } from "./game-flow.component";

@NgModule({
  declarations: [GameFlowComponent],
  imports: [CommonModule, GameFlowRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class GameFlowModule {}
