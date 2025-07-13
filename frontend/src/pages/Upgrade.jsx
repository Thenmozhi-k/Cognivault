import React from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check, Star, Zap, Crown, Infinity } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    current: true,
    description: "Perfect for getting started with AI-powered learning",
    features: [
      "5 AI summaries per month",
      "20 flashcards per month",
      "Basic chat with AI assistant",
      "Simple progress tracking",
      "Community support"
    ],
    limitations: [
      "Limited AI interactions",
      "No voice features",
      "Basic export options"
    ]
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    popular: true,
    description: "Unlock the full potential of AI-powered learning",
    features: [
      "Unlimited AI summaries",
      "Unlimited flashcards & quizzes",
      "Advanced AI chat with memory",
      "Voice input & output",
      "PDF & video processing",
      "Advanced analytics",
      "Priority support",
      "Custom study schedules",
      "Export to multiple formats"
    ],
    highlight: "Most Popular"
  },
  {
    name: "Team",
    price: "$24.99",
    period: "per month",
    description: "Collaborate and learn together with your team",
    features: [
      "Everything in Pro",
      "Team collaboration features",
      "Shared learning modules",
      "Team progress tracking",
      "Admin dashboard",
      "Custom integrations",
      "Dedicated support",
      "Custom AI training"
    ],
    highlight: "Best for Teams"
  }
];

const premiumFeatures = [
  {
    icon: Zap,
    title: "Advanced AI Processing",
    description: "Process PDFs, videos, and complex documents with cutting-edge AI models"
  },
  {
    icon: Infinity,
    title: "Unlimited Everything",
    description: "No limits on summaries, flashcards, quizzes, or AI conversations"
  },
  {
    icon: Star,
    title: "Priority Processing",
    description: "Skip the queue with faster AI response times and priority processing"
  },
  {
    icon: Crown,
    title: "Premium AI Models",
    description: "Access to the latest GPT-4, Claude, and specialized learning AI models"
  }
];

const Upgrade = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="Upgrade to Pro" 
        subtitle="Unlock unlimited AI-powered learning capabilities"
      />
      
      <main className="flex-1 p-6 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Supercharge Your Learning with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get unlimited access to advanced AI features, voice interactions, and powerful learning tools designed to accelerate your progress.
          </p>
        </div>

        {/* Premium Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumFeatures.map((feature, index) => (
            <Card key={index} className="text-center bg-gradient-secondary border-border/50 card-hover">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-secondary border-border/50 ${
                plan.popular ? "ring-2 ring-primary glow-primary" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-3 py-1">
                    {plan.highlight}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground">/{plan.period}</span>
                  </div>
                  {plan.current && (
                    <Badge variant="outline" className="text-green-500">
                      Current Plan
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-center">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {plan.limitations && (
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="text-xs text-muted-foreground font-medium">Limitations:</div>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="text-xs text-muted-foreground">
                        • {limitation}
                      </div>
                    ))}
                  </div>
                )}
                
                <Button 
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? "bg-gradient-primary hover:opacity-90 glow-primary" 
                      : plan.current 
                        ? "opacity-50 cursor-not-allowed" 
                        : ""
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : `Upgrade to ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Can I cancel anytime?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, PayPal, and other secure payment methods through Stripe.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Is there a free trial?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can try Pro features free for 14 days. No credit card required to start.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">How does the AI processing work?</h4>
                  <p className="text-sm text-muted-foreground">
                    We use state-of-the-art AI models including GPT-4 and Claude to process your content and generate intelligent summaries, flashcards, and answers.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Is my data secure?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. We use enterprise-grade encryption and never store your personal content longer than necessary for processing.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Can I upgrade or downgrade anytime?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can change your plan at any time. Changes take effect immediately with prorated billing.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4 p-8 bg-gradient-glow rounded-xl border border-border/50">
          <h3 className="text-2xl font-bold">Ready to accelerate your learning?</h3>
          <p className="text-muted-foreground">
            Join thousands of learners who are already using AI to study smarter, not harder.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 glow-primary text-lg px-8">
            Start 14-Day Free Trial
          </Button>
          <p className="text-xs text-muted-foreground">
            No credit card required • Cancel anytime • Full access to all Pro features
          </p>
        </div>
      </main>
    </div>
  );
};

export default Upgrade;