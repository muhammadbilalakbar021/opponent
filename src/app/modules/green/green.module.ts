import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { GreenRoutingModule } from "./green-routing.module";
import { GreenComponent } from "./green.component";

@NgModule({
  declarations: [GreenComponent],
  imports: [CommonModule, GreenRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class GreenModule {}
