// Library
import { Component } from "@angular/core";

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
      path: "/experience",
      label: "Experience"
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
      path: "/blog",
      label: "Blog"
    },
    {
      path: "/faq",
      label: "FAQ"
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
}
