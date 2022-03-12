import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmptyRoutingModule } from "./empty-routing.module";
import { EmptyComponent } from "./empty.component";

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, EmptyRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class EmptyModule {}
