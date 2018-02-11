import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  GlobalErrorHandlerService,
  GoogleAnalyticsService,
  HighlighterPipe
} from "./";

@NgModule({
  imports: [CommonModule],
  declarations: [HighlighterPipe],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    GoogleAnalyticsService
  ],
  exports: [HighlighterPipe]
})
export class SharedModule {}
