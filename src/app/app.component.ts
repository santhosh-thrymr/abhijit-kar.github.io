import { Component, HostListener, ViewChild, ElementRef } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { GoogleAnalyticsService } from "./shared";

import { MatSidenav } from "@angular/material";

// import {} from "@angular/cdk";

declare var ga;

@Component({
  selector: "ak-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("sideNav") sideNav: MatSidenav;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: Event) {
    if (this.sideNav && this.sideNav.opened) {
      console.log(event.target);
      this.sideNav.close();
    }
  }

  constructor(
    public router: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.googleAnalyticsService.emitPageEvent(event);
      }
    });
  }
}
