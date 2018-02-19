import { Component, Output, EventEmitter } from "@angular/core";

import { GoogleAnalyticsService } from "../shared";

import {
  Router,
  Event as RouterEvent, // import as RouterEvent to avoid confusion with the DOM Event
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

@Component({
  selector: "ak-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.css"]
})
export class HeaderComponent {
  @Output()
  onHamburgerClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  onEnvelopeClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  isHamburgerOpen: boolean;
  isEnvelopeOpen: boolean;

  routes = [
    {
      url: "/",
      label: "home"
    },
    {
      url: "/about",
      label: "About"
    },
    {
      url: "/blog",
      label: "Blog"
    },
    {
      url: "/faq",
      label: "FAQ"
    },
    {
      url: "/skills",
      label: "Skills"
    },
    {
      url: "/projects",
      label: "Projects"
    },
    {
      url: "/experience",
      label: "Experience"
    },
    {
      url: "/awards",
      label: "Awards"
    },
    {
      url: "/education",
      label: "Education"
    }
  ];

  contact = {
    name: "Contact",
    category: "Addresses",
    url:
      "https://docs.google.com/forms/d/e/1FAIpQLSfxFTIJXHWlBSU9xJZVL-K9OydR_ooJ69Sp4Sq571_Llp7X4g/viewform?usp=sf_link"
  };

  currentUrl: string;

  loading: boolean;

  constructor(
    private router: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.currentUrl = event.url;
      this.loading = true;
    } else if (event instanceof NavigationEnd) {
      this.loading = false;
    } else if (event instanceof NavigationCancel) {
      this.loading = false;
    } else if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

  handleHamburgerClick() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
    this.onHamburgerClick.emit(this.isHamburgerOpen);
  }

  handleEnvelopeClick() {
    this.isEnvelopeOpen = !this.isEnvelopeOpen;
    this.onEnvelopeClick.emit(this.isEnvelopeOpen);
  }

  handleButtonClick(btnData: any) {
    event.preventDefault();

    this.googleAnalyticsService.emitEvent(btnData.category, btnData.name, $ => {
      window.open(btnData.url, "_blank");
    });
  }
}
