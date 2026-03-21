import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What do I receive after purchase?",
    answer:
      "You'll receive instant digital access to the complete Flag Clash source code package, including all project files, documentation, and instructions for scheduling your video call support session.",
  },
  {
    question: "Is this a physical product?",
    answer:
      "No, this is a digital product. You'll receive all files electronically with instant delivery—no shipping required.",
  },
  {
    question: "Is support included?",
    answer:
      "Yes! Your purchase includes video call support for personalized guidance, plus ongoing email support for questions. We're committed to helping you succeed with your project.",
  },
  {
    question: "Can I customize the source code?",
    answer:
      "Absolutely. The source code is fully yours to modify, customize, and adapt to your specific needs. The code is well-organized and documented to make customization straightforward.",
  },
  {
    question: "Is the Buy button functional?",
    answer:
      "Click the Buy Now button to proceed to checkout. For any questions, please contact us directly at support@softment.com.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us anytime at support@softment.com, For pre-sale questions, technical help, or to schedule your video call support—we're happy to assist.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-border bg-secondary/50 px-4 py-1.5 text-muted-foreground"
          >
            Common Questions
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before making your decision
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/30 px-6 backdrop-blur-sm data-[state=open]:border-accent/30 data-[state=open]:bg-card/50"
              >
                <AccordionTrigger className="py-5 text-left text-foreground hover:text-accent hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
