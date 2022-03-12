import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { TenRoutingModule } from "./ten-routing.module";
import { TenComponent } from "./ten.component";

@NgModule({
  declarations: [TenComponent],
  imports: [CommonModule, TenRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class TenModule {}
