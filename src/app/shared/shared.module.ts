import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  GlobalErrorHandlerService,
  GoogleAnalyticsService,
  LinkHandlerService,
  HighlighterPipe,
  SummarizerComponent
} from "./";

@NgModule({
  imports: [CommonModule],
  declarations: [HighlighterPipe, SummarizerComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    GoogleAnalyticsService,
    LinkHandlerService
  ],
  exports: [HighlighterPipe, SummarizerComponent]
})
export class SharedModule {}
