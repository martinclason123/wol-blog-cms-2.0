export type ElementType = "text" | "image" | "link";

export interface Text {
  title: string;
  type: ElementType;
  value: string;
}
