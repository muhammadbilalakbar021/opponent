import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { OpponentSummaryRoutingModule } from "./opponent-summary-routing.module";
import { OpponentSummaryComponent } from "./opponent-summary.component";

@NgModule({
  declarations: [OpponentSummaryComponent],
  imports: [CommonModule, OpponentSummaryRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class OpponentSummaryModule {}
