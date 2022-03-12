import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { PersonnelRoutingModule } from "./personnel-routing.module";
import { PersonnelComponent } from "./personnel.component";

@NgModule({
  declarations: [PersonnelComponent],
  imports: [CommonModule, PersonnelRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class PersonnelModule {}
