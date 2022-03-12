import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { KeyRunsRoutingModule } from "./key-runs-routing.module";
import { KeyRunsComponent } from "./key-runs.component";

@NgModule({
  declarations: [KeyRunsComponent],
  imports: [CommonModule, KeyRunsRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class KeyRunsModule {}
