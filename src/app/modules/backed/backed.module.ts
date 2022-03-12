import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { BackedRoutingModule } from "./backed-routing.module";
import { BackedComponent } from "./backed.component";

@NgModule({
  declarations: [BackedComponent],
  imports: [CommonModule, BackedRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class BackedModule {}
