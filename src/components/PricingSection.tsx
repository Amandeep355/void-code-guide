import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "For individual developers exploring codebases.",
    features: ["5 analyses per month", "Repos up to 10K lines", "Basic architecture map", "Markdown export"],
    elevated: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/mo",
    description: "For teams that need deep, continuous understanding.",
    features: ["Unlimited analyses", "Repos up to 500K lines", "Full data flow tracing", "PDF & HTML export", "Priority processing", "API access"],
    elevated: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with complex, multi-repo systems.",
    features: ["Everything in Pro", "Unlimited repo size", "Self-hosted option", "SSO & SAML", "Dedicated support", "Custom integrations"],
    elevated: false,
  },
];

const PricingSection = () => {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Pricing</p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Simple, Transparent
      </h2>
      <p className="font-body text-lg text-muted-foreground max-w-xl mb-16">
        No hidden fees. No per-seat charges. Pay for what you use.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-foreground">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`p-8 md:p-10 border-foreground flex flex-col ${
              tier.elevated
                ? "section-inverted md:-my-6 md:py-16 md:border-2 md:border-background relative z-10"
                : "card-invert"
            } [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r`}
          >
            <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-6">
              {tier.name}
            </p>
            <div className="mb-6">
              <span className="font-display text-5xl font-bold">{tier.price}</span>
              {tier.period && <span className="font-body text-lg opacity-60">{tier.period}</span>}
            </div>
            <p className="font-body text-sm opacity-70 mb-8">{tier.description}</p>
            <ul className="space-y-3 mb-10 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-body">
                  <Check size={16} strokeWidth={2} className="mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={tier.elevated ? "outline" : "default"}
              size="lg"
              className={`w-full uppercase tracking-widest font-mono text-xs ${
                tier.elevated
                  ? "border-background text-background hover:bg-background hover:text-foreground"
                  : ""
              }`}
            >
              Get Started <ArrowRight size={16} strokeWidth={1.5} />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
