import {
  Component,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef
} from "@angular/core";
import {
  Router,
  Event as RouterEvent, // import as RouterEvent to avoid confusion with the DOM Event
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

import { LinkHandlerService } from "../shared";

@Component({
  selector: "ak-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.css"]
})
export class HeaderComponent {
  @ViewChildren("tabs") tabs: QueryList<ElementRef>;
  @Output()
  onHamburgerClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentUrl: any;
  isHamburgerOpen: boolean;
  loading: boolean;
  routeMap: any = {};

  routes = [
    {
      url: "/",
      label: "Home"
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

  constructor(
    private router: Router,
    public linkHandlerService: LinkHandlerService
  ) {
    for (let i = 0; i < this.routes.length; i++) {
      this.routeMap[this.routes[i].url] = i;
    }

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.currentUrl = event.url;

      this.tabs
        .toArray()
        [this.routeMap[this.currentUrl]].nativeElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });

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
}
