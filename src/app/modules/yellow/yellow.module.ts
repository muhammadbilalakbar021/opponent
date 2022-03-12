import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { YellowRoutingModule } from "./yellow-routing.module";
import { YellowComponent } from "./yellow.component";

@NgModule({
  declarations: [YellowComponent],
  imports: [CommonModule, YellowRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class YellowModule {}
