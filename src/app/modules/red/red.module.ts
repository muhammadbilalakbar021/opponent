import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { RedRoutingModule } from "./red-routing.module";
import { RedComponent } from "./red.component";

@NgModule({
  declarations: [RedComponent],
  imports: [CommonModule, RedRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class RedModule {}
