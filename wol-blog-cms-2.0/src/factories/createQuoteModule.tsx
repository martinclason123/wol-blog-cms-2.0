// Factory function for QuoteModule
import React from "react";
import { QuoteModule } from "../types/moduleTypes";
import { Quote } from "@/svgs";
const createQuoteModule = (id: number): QuoteModule => ({
  id,
  title: "Quote",
  icon: <Quote />,
  elements: {
    quote: { title: "quote", type: "text", value: "Inspiring quote" },
  },
});

export default createQuoteModule;
