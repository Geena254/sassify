
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 3 projects",
      "Basic reporting",
      "1 team member",
      "5GB storage",
      "Email support"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Up to 10 team members",
      "50GB storage",
      "Priority support",
      "Custom workflows"
    ],
    popular: true,
    buttonText: "Try Free for 14 Days"
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited everything",
      "Advanced security features",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support",
      "SLA guarantees"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs. No hidden fees or surprise charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`${plan.popular ? 'border-primary shadow-lg relative' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-white text-xs font-semibold py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? '' : 'bg-white text-primary hover:bg-gray-100 border border-gray-200'}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
