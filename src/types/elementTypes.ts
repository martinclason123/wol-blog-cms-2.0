// elementTypes.ts
export type ElementType = "text" | "image" | "boolean";

export interface Element {
  title: string;
  type: ElementType;
  value: string | string[] | boolean;
  icon: React.ReactNode;
}

export interface Text extends Element {
  type: "text";
}

export interface Image extends Element {
  type: "image";
}

export interface Boolean extends Element {
  type: "boolean";
}

export interface Selector extends Element {
  type: "selector";
}
