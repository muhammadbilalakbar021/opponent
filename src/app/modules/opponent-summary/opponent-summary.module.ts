import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpponentSummaryRoutingModule } from './opponent-summary-routing.module';
import { OpponentSummaryComponent } from './opponent-summary.component';


@NgModule({
  declarations: [
    OpponentSummaryComponent
  ],
  imports: [
    CommonModule,
    OpponentSummaryRoutingModule
  ]
})
export class OpponentSummaryModule { }
