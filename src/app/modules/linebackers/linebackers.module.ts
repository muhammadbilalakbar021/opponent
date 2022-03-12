import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { LinebackersRoutingModule } from "./linebackers-routing.module";
import { LinebackersComponent } from "./linebackers.component";

@NgModule({
  declarations: [LinebackersComponent],
  imports: [CommonModule, LinebackersRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class LinebackersModule {}
