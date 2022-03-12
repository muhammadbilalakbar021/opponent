import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlignmentRoutingModule } from "./alignment-routing.module";
import { AlignmentComponent } from "./alignment.component";

@NgModule({
  declarations: [AlignmentComponent],
  imports: [CommonModule, AlignmentRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AlignmentModule {}
