import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrangeRoutingModule } from "./orange-routing.module";
import { OrangeComponent } from "./orange.component";

@NgModule({
  declarations: [OrangeComponent],
  imports: [CommonModule, OrangeRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class OrangeModule {}
