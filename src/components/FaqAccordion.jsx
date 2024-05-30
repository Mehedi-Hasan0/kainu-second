import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data";

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
      {faqData.map((data, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx + 1}`}
          className="bg-csDarkBlue px-4 lg:px-7 rounded-full hover:bg-gradient-to-r from-csDarkBlue to-csPrimary"
        >
          <AccordionTrigger className="text-xs lg:text-base 2xl:text-lg">
            {data.ques}
          </AccordionTrigger>
          <AccordionContent className="text-xs lg:text-base 2xl:text-lg">
            {data.ans}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
