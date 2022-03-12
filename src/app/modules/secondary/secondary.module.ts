import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { SecondaryRoutingModule } from "./secondary-routing.module";
import { SecondaryComponent } from "./secondary.component";

@NgModule({
  declarations: [SecondaryComponent],
  imports: [CommonModule, SecondaryRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class SecondaryModule {}
