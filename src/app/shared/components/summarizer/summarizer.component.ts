import { Component, Input } from "@angular/core";

enum BtnTexts {
  MORE = "More",
  LESS = "Less"
}

@Component({
  selector: "ak-summarizer",
  templateUrl: "summarizer.component.html",
  styleUrls: ["summarizer.component.css"]
})
export class SummarizerComponent {
  @Input() paragraph: string;
  @Input() bullets: string[];

  summaryLength = 140;
  showSummary = true;
  btnText = BtnTexts.MORE;

  get para(): string {
    let summary = this.paragraph;

    if (this.showSummary && this.paragraph.length > this.summaryLength) {
      summary = this.paragraph.substr(0, 140);
    }

    return summary;
  }

  toggleSummary() {
    this.showSummary = !this.showSummary;
    this.btnText = this.showSummary ? BtnTexts.MORE : BtnTexts.LESS;
  }
}
