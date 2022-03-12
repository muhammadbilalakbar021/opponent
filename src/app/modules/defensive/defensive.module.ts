import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { DefensiveRoutingModule } from "./defensive-routing.module";
import { DefensiveComponent } from "./defensive.component";

@NgModule({
  declarations: [DefensiveComponent],
  imports: [CommonModule, DefensiveRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class DefensiveModule {}
