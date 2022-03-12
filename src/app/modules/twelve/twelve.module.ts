import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { TwelveRoutingModule } from "./twelve-routing.module";
import { TwelveComponent } from "./twelve.component";

@NgModule({
  declarations: [TwelveComponent],
  imports: [CommonModule, TwelveRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class TwelveModule {}
