import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { ElevenRoutingModule } from "./eleven-routing.module";
import { ElevenComponent } from "./eleven.component";

@NgModule({
  declarations: [ElevenComponent],
  imports: [CommonModule, ElevenRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ElevenModule {}
