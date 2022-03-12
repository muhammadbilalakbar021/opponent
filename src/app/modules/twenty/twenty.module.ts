import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { TwentyRoutingModule } from "./twenty-routing.module";
import { TwentyComponent } from "./twenty.component";

@NgModule({
  declarations: [TwentyComponent],
  imports: [CommonModule, TwentyRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class TwentyModule {}
