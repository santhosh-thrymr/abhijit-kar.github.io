import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "highlighter" })
export class HighlighterPipe implements PipeTransform {
  colors: string[] = [
    "#F44336", // RED
    "#FF5722", // Deep Orange
    "#FF9800", // Orange
    "#FFC107", // Amber
    "#FFEB3B", // Yellow
    "#DCE775", // Light Lime
    "#E6EE9C", // Lime
    "#AED581", // Lighter Green
    "#8BC34A", // Light Green
    "#4CAF50" // Green
  ];
  transform(percentage: number): string {
    return this.colors[Math.floor(percentage / 10)];
  }
}
