import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "highlighter" })
export class HighlighterPipe implements PipeTransform {
  colors: string[] = [
    "#007bff", // Blue
    "#dc3545", // Red
    "#fd7e14", // Orange
    "#28a745", // Green
    "#6f42c1"  // Purple
  ];
  transform(index: number): string {
    return this.colors[index % 5];
  }
}
