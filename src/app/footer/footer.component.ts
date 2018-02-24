import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { BreakpointObserver } from "@angular/cdk/layout";

import { ChatBotComponent } from "../chat-bot/chat-bot.component";

@Component({
  selector: "ak-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.css"]
})
export class FooterComponent {
  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  startChat() {
    const dialogRef: MatDialogRef<ChatBotComponent> = this.dialog.open(
      ChatBotComponent,
      { width: this.sizeBaseOnScreenSize() }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  sizeBaseOnScreenSize(): string {
    if (this.breakpointObserver.isMatched("(max-width: 768px)")) {
      return "100%";
    }

    return "41.8%";
  }
}
