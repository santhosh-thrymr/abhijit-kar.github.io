import { Component } from "@angular/core";
import { LinkHandlerService } from "../shared";

@Component({
  selector: "ak-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.css"]
})
export class FooterComponent {
  chatBot = {
    name: "Chat Bot",
    category: "Chat Bot",
    url: "https://console.dialogflow.com/api-client/demo/embedded/abhijit-kar"
  };

  constructor(public linkHandlerService: LinkHandlerService) {}
}
