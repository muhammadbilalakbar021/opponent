import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { TwentyOneRoutingModule } from "./twenty-one-routing.module";
import { TwentyOneComponent } from "./twenty-one.component";

@NgModule({
  declarations: [TwentyOneComponent],
  imports: [CommonModule, TwentyOneRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class TwentyOneModule {}
