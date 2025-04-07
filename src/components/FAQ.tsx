
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all features for 14 days. No credit card required and you can cancel anytime. At the end of your trial, you can choose the plan that fits your needs."
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the changes will take effect at the start of your next billing cycle."
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer: "It depends on your plan. The Starter plan allows for 1 team member, the Pro plan supports up to 10 team members, and the Enterprise plan offers unlimited team members. You can always upgrade if you need to add more users."
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer: "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information and to verify your eligibility."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and strict access controls. All data is stored in SOC 2 compliant data centers, and we never share your information with third parties."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer different levels of support based on your plan. All customers receive email support. Pro plan customers get priority email support with faster response times. Enterprise customers receive 24/7 phone support and a dedicated account manager."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Have questions? We're here to help. If you don't see your question here, 
            feel free to reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
