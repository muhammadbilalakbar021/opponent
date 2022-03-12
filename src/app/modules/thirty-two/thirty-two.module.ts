import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThirtyTwoRoutingModule } from "./thirty-two-routing.module";
import { ThirtyTwoComponent } from "./thirty-two.component";

@NgModule({
  declarations: [ThirtyTwoComponent],
  imports: [CommonModule, ThirtyTwoRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ThirtyTwoModule {}
