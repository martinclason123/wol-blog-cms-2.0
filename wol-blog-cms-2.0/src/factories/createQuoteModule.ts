// Factory function for QuoteModule
import { QuoteModule } from "../types/moduleTypes";
const createQuoteModule = (id: number): QuoteModule => ({
  id,
  title: "Quote",
  elements: {
    quote: { title: "quote", type: "text", value: "Inspiring quote" },
  },
});

export default createQuoteModule;
