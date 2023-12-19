// elementTypes.ts
export type ElementType = "text" | "image";

export interface Element {
  title: string;
  type: ElementType;
  value: string;
  icon: React.ReactNode;
}

export interface Text extends Element {
  type: "text";
}

export interface Image extends Element {
  type: "image";
}
