//createQuoteModule.tsx
// Factory function for QuoteModule
import React from "react";
import { QuoteModule } from "../types/moduleTypes";
import { Quote, TextIcon } from "@/svgs";
const createQuoteModule = (id: number): QuoteModule => ({
  id,
  title: "Quote",
  icon: <Quote />,
  elements: {
    quote: {
      title: "quote",
      type: "text",
      value: "Inspiring quote",
      icon: <TextIcon />,
    },
  },
});

export default createQuoteModule;
