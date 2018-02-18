// Library
import { Component } from "@angular/core";

import {
  Router,
  Event as RouterEvent, // import as RouterEvent to avoid confusion with the DOM Event
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.css"]
})
export class HeaderComponent {
  navLinks = [
    {
      path: "/",
      label: "home"
    },
    {
      path: "/about",
      label: "About"
    },
    {
      path: "/blog",
      label: "Blog"
    },
    {
      path: "/faq",
      label: "FAQ"
    },
    {
      path: "/skills",
      label: "Skills"
    },
    {
      path: "/projects",
      label: "Projects"
    },
    {
      path: "/experience",
      label: "Experience"
    },
    {
      path: "/awards",
      label: "Awards"
    },
    {
      path: "/education",
      label: "Education"
    }
  ];

  currentLink = this.navLinks[0];

  loading: boolean;

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else if (event instanceof NavigationEnd) {
      this.loading = false;
    } else if (event instanceof NavigationCancel) {
      this.loading = false;
    } else if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
