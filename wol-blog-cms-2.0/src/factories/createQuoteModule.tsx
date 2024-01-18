//createQuoteModule.tsx
// Factory function for QuoteModule
import React from "react";
import { QuoteModule } from "../types/moduleTypes";
import { QuotePreview } from "@/components/previewComponents";
import { Quote, TextIcon } from "@/svgs";
import { quoteSnippet } from "../snippets";
const createQuoteModule = (id: number): QuoteModule => ({
  id,
  title: "Quote",
  icon: <Quote />,
  snippet: quoteSnippet,
  preview: QuotePreview,
  elements: {
    quote: {
      title: "quote",
      type: "text",
      value:
        "“It all comes down to the joy,” Karen says. “I know what’s coming. Once it’s all finished it’s just beautiful, and the kids come over and sit here at night to look at it. Friends come in, they take one look, and they just start laughing. It brings joy. Christmas joy.” ",
      icon: <TextIcon />,
    },
  },
});

export default createQuoteModule;
