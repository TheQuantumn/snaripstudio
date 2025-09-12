import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setSEO } from "@/lib/seo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Packages() {
  useEffect(() => {
    setSEO({
      title: "Website Design Packages | Transparent Pricing",
      description:
        "Transparent pricing for every stage of your business. Let's build something amazing together.",
      keywords: [
        "website packages",
        "web design pricing",
        "ecommerce website",
        "business website",
        "seo setup",
      ],
      canonicalPath: "/packages",
    });
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="text-center mb-14">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Website Design Packages
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transparent pricing for every stage of your business. Let's build
          something amazing together.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Essentials Package */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Essentials Package</CardTitle>
            <CardDescription>Perfect for a professional start.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-3xl font-bold">₹15,000</div>
              <div className="text-sm text-muted-foreground">/one-time</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Get a clean, modern web presence that establishes your credibility
              and attracts new clients.
            </p>
            <ul className="space-y-3">
              {[
                "5-Page Custom Website",
                "Mobile-Responsive Design",
                "Contact Form & Map",
                "Basic On-Page SEO",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild className="w-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Business Growth Package */}
        <Card className="relative flex flex-col border-primary/40">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge>MOST POPULAR</Badge>
          </div>
          <CardHeader>
            <CardTitle>Business Growth Package</CardTitle>
            <CardDescription>For businesses ready to scale.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-3xl font-bold">₹35,000</div>
              <div className="text-sm text-muted-foreground">/one-time</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Includes advanced features to convert visitors into customers and
              streamline your operations.
            </p>
            <ul className="space-y-3">
              {[
                "Up to 10 Pages",
                "Everything in Essentials",
                "Online Booking System",
                "Advanced SEO Setup",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild className="w-full" variant="secondary">
              <Link to="/contact">Choose Growth</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* E-commerce Package */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>E-commerce Package</CardTitle>
            <CardDescription>
              Start selling your products online.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-3xl font-bold">Starting at ₹50,000</div>
            </div>
            <p className="text-sm text-muted-foreground">
              A complete online store solution, built on a powerful and
              easy-to-manage platform.
            </p>
            <ul className="space-y-3">
              {[
                "Everything in Business Growth",
                "Shopify or WooCommerce Setup",
                "Up to 20 Product Uploads",
                "Payment Gateway Integration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild className="w-full" variant="outline">
              <Link to="/contact">Start Selling</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <p className="mt-10 text-xs text-muted-foreground">
        *Domain and hosting costs are separate and to be paid for by the client.
        We assist with the setup process.
      </p>
    </main>
  );
}
