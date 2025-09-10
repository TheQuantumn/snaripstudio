import { useState, useEffect, useRef } from "react";
import Silk from "../components/Silk";
import StarBorder from "../components/StarBorder";
import FlowingMenu from "../components/FlowingMenu";
import { setSEO } from "@/lib/seo";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Page SEO
  useEffect(() => {
    setSEO({
      title:
        "Website Development Company in Greater Noida, Noida & Gurgaon | SnaripStudio",
      description:
        "SnaripStudio builds fast, SEO-friendly websites that grow your business. Trusted website development company serving Greater Noida, Noida and Gurgaon.",
      keywords: [
        "snarip",
        "snarip studio",
        "snaripstudio",
        "snarip studios",
        "website development",
        "website development company",
        "web development company",
        "Greater Noida",
        "Noida",
        "Gurgaon",
        "Gurugram",
        "SEO services",
        "ecommerce website",
      ],
      canonicalPath: "/",
    });
  }, []);

  // Simple scroll animation setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: "CUSTOM WEBSITE DESIGN",
      description:
        "Unique, pixel-perfect designs made from scratch. Every element crafted specifically for your brand's story and goals.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "DESIGN",
    },
    {
      title: "RESPONSIVE WEB DEVELOPMENT",
      description:
        "Mobile-friendly websites that look stunning on any device. Clean, efficient code built for performance and scalability.",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "DEVELOPMENT",
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      description:
        "Build online stores with powerful features that convert visitors into customers. Secure, fast, and user-friendly shopping experiences.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "E-COMMERCE",
    },
    {
      title: "SEO OPTIMIZATION",
      description:
        "Websites crafted with SEO best practices for better search engine visibility and organic traffic growth.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "SEO",
    },
    {
      title: "CONTENT MANAGEMENT",
      description:
        "Easy-to-manage sites with WordPress, custom CMS, or headless solutions. Update your content with confidence.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "CMS",
    },
    {
      title: "SECURITY & MAINTENANCE",
      description:
        "Regular updates, backups, and secure coding practices. Keep your website safe, fast, and up-to-date.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2ea0?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "MAINTENANCE",
    },
  ];

  const projects = [
    {
      text: "LUXE WEDDINGS",
      image:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      link: "https://luxeweddings.netlify.app/",
    },
    {
      text: "CONIX MEDIA",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      link: "https://conixmedia.netlify.app/",
    },
    {
      text: "LENS PHOTOGRAPHY",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      link: "https://lens-photography.netlify.app/",
    },
    {
      text: "RIHAND CABS",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      link: "https://rihandcabs.in",
    },
  ];

  const testimonials = [
    {
      quote:
        "SnaripStudio created an outstanding website for our social media marketing agency that transformed our business. The conversion-focused design increased our client inquiries by 150% within the first month.",
      name: "DEVANSH SRIVASTAVA",
      position: "CEO, ConixMedia",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Ff48aa15f6f184b529ed3ca882d1ea006%2F11c44a19c4b3408281b5949101120872?format=webp&width=800",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
    },
    {
      quote:
        "Working with SnaripStudio was a game-changer for our cab booking platform. They delivered a sleek, responsive website that perfectly showcases our services and made it incredibly easy for customers to book rides. Our online bookings increased by 200% within just two months!",
      name: "MANISH JAISWAL",
      position: "Founder, RihandCabs",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F6034a906a3aa4789a8fd44988e1ebb28%2Fc7a5ed8b3c214b41ad68b85707a65de5?format=webp&width=800",
      logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
    },
  ];

  return (
    <div
      className="min-h-screen bg-background relative overflow-hidden"
      itemScope
      itemType="https://schema.org/ProfessionalService"
    >
      {/* Animated Background Lines */}
      <div className="background-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Silk Background */}
        <div className="absolute inset-0 w-full h-full">
          <Silk
            speed={5}
            scale={1}
            color="#2d1b69"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <div className="w-full px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* New Background Label */}
            <StarBorder as="div" className="mb-8" color="#5227FF" speed="4s">
              <p>Snarip Studio</p>
            </StarBorder>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat text-white leading-tight tracking-tight mb-12">
              Crafting Digital
              <br />
              Experiences That Convert
              <br />
              Ideas into Growth
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#about"
                className="bg-white text-gray-900 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all hover:bg-gray-100 hover:shadow-lg hover:ring-2 hover:ring-primary/30 hover:-translate-y-0.5"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 hover:shadow-md"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Service Area Section */}
      <section id="services" className="px-4 md:px-8 py-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 items-start justify-items-center">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
                WEBSITE DEVELOPMENT IN NCR
              </h2>
              <h3 className="text-3xl md:text-5xl font-montserrat text-foreground leading-tight mb-6">
                Website Development Company
              </h3>
              <div className="h-px w-24 bg-border mx-auto mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Looking for a website maker or web development company in
                Greater Noida, Noida, or Gurgaon? We design and develop fast,
                SEO-optimized websites that convert visitors into customers.
                From corporate sites to e‑commerce, we deliver end‑to‑end
                solutions including design, development, SEO, and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="px-4 md:px-8 py-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll fade-up">
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
                ABOUT US
              </h2>
              <h3 className="text-3xl md:text-5xl font-montserrat text-foreground leading-tight mb-8">
                EVERY BRAND HAS A
                <br />
                UNIQUE STORY
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At SnaripStudio, we believe every brand has a unique story—and
                your website should tell it beautifully. We're a passionate team
                of web developers and designers dedicated to creating
                tailor-made websites that don't just look great, but also work
                seamlessly, load quickly, and help your business grow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of combined experience, we merge creativity and
                technology to deliver solutions that stand out in a crowded
                digital world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Snarip (Snarip Studio) is a web development studio helping
                brands build fast, SEO‑friendly websites in Greater Noida, Noida
                and Gurgaon.
              </p>
            </div>
            <div className="animate-on-scroll fade-left">
              <img
                src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Developer working on code with laptop and programming resources"
                className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105 rounded-xl shadow-lg shadow-black/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="px-4 md:px-8 pt-16 pb-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
              WHAT MAKES US UNIQUE
            </h2>
            <h3 className="text-3xl md:text-5xl font-montserrat text-foreground leading-tight">
              WHY CHOOSE
              <br />
              SNARIPSTUDIO
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Tailored Approach",
                description:
                  "Every project starts with understanding your needs, not forcing you into pre-made templates.",
              },
              {
                title: "Creative Design & Smart Development",
                description:
                  "We design stunning, engaging interfaces and develop them with clean, efficient code.",
              },
              {
                title: "One-Stop Web Partner",
                description:
                  "From design and development to maintenance and updates, we handle it all so you don't have to.",
              },
              {
                title: "Performance Obsessed",
                description:
                  "Fast-loading websites optimized for SEO, conversions, and the best user experience.",
              },
              {
                title: "Mobile-First Mindset",
                description:
                  "Every website adapts beautifully on all devices, ensuring a seamless experience everywhere.",
              },
              {
                title: "Long-Term Support",
                description:
                  "We don't disappear after launch; we offer ongoing support so your website stays fresh and secure.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex gap-4 animate-on-scroll fade-up delay-${index * 100}`}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-orange rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-montserrat text-lg mb-2 font-semibold">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Marquee */}
      <section id="work" className="bg-card">
        <div className="px-4 md:px-8 py-16">
          <div className="max-w-7xl mx-auto animate-on-scroll fade-up">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
              SELECTED PROJECTS
            </h2>
            <h3 className="text-3xl md:text-5xl font-montserrat text-foreground leading-tight">
              OUR RECENT WORK
            </h3>
          </div>
        </div>

        <div className="w-full animate-on-scroll fade-up delay-300">
          <div style={{ height: "600px", position: "relative" }}>
            <FlowingMenu items={projects} />
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-8 animate-on-scroll fade-up">
            CLIENT WORDS
          </h2>

          <div className="max-w-4xl animate-on-scroll fade-up delay-200 mx-auto">
            <div className="mb-8">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 transition-all duration-500"
              />
              <div className="mb-4">
                <div className="font-medium text-lg text-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </div>

            <blockquote className="text-lg md:text-xl font-normal leading-relaxed text-center text-foreground transition-all duration-500">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Testimonial Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    currentTestimonial === 0
                      ? testimonials.length - 1
                      : currentTestimonial - 1,
                  )
                }
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentTestimonial(
                    currentTestimonial === testimonials.length - 1
                      ? 0
                      : currentTestimonial + 1,
                  )
                }
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SnaripStudio Section */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-4">
              WHY CHOOSE US
            </h2>
            <h3 className="text-3xl md:text-5xl font-montserrat text-foreground leading-tight mb-8">
              WE DON'T JUST BUILD
              <br />
              WEBSITES—WE CRAFT
              <br />
              <span className="text-primary">DIGITAL EXPERIENCES</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We blend creativity, technical expertise, and a genuine passion
              for your success. Our websites inspire trust, impress your
              customers, and grow your business through strategic design and
              flawless execution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-24 bg-card text-foreground">
        <div className="max-w-7xl mx-auto text-center animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-6xl font-montserrat text-foreground leading-tight mb-8">
            READY TO TRANSFORM
            <br />
            YOUR DIGITAL PRESENCE?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and bring your vision to life with our
            creative expertise. Your extraordinary digital experience starts
            with a conversation.
          </p>
          <a
            href="/contact"
            className="group bg-primary text-primary-foreground px-12 py-4 text-lg font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-3 floating-cta"
          >
            LET'S DISCUSS YOUR PROJECT
            <span className="transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Snarip Studio",
            alternateName: [
              "Snarip",
              "SnaripStudio",
              "Snarip Studios",
              "snrip studio",
              "sarip studio",
              "narip studio",
              "snarp studio",
              "snaip studio",
              "snari studio",
              "ssnarip studio",
              "snaarip studio",
              "snarrip studio",
              "snariip studio",
              "snaripp studio",
              "snaripa studio",
              "sanrip studio",
              "snraip studio",
              "snairp studio",
              "snarpi studio",
              "nsarip studio",
              "snarop studio",
              "snatip studio",
              "smarip studio",
              "snwrip studio",
              "snario studio",
              "sbarip studio",
              "snarjp studio",
              "snarkp studio",
              "snaeip studio",
              "anarip studio",
              "znarip studio",
              "snarip dtudio",
              "snorip studio",
              "snerip studio",
              "snarup studio",
              "snyrip studio",
              "snarip studo",
              "snarip stodio",
              "snarip studeo",
              "snarip stuidio",
              "snarip studi",
              "snarip stido",
              "snarip studoi",
              "snarip staduio",
              "snarip studios",
              "snaripstudio",
              "snarip-studio",
              "snarips studio",
              "snaripstudios",
              "the snarip studio",
              "snarip studio co",
              "snarip studio com",
              "snrip studios",
              "sanrip studios",
              "snarrip studios",
              "smarip studios",
              "snrip studo",
              "sanrip studo",
              "snarrip stodio",
              "snarop studeo",
              "snatip stuidio",
              "sanripstudio",
              "snripstudio",
              "snaripstudos",
              "snaripstudo",
              "snaripstodio",
              "sanrip studeo",
              "snraip stuidio",
              "snairp studoi",
              "snarpi stado",
              "nsarip studo",
              "snarp studios",
              "snaip studo",
              "snari studeo",
              "snaro studio",
              "snari studios",
              "snapi studio",
              "snaripe studio",
              "snario studio",
              "snarip stufio",
              "snarip syudio",
              "snarip atudio",
              "snarip studuo",
              "snarip atudios",
              "snarip stufios",
              "snairp studo",
              "snarpi stodio",
              "sarip studios",
              "narip studos",
              "snarrip stufio",
              "snaarip studeo",
              "sanripstudeo",
              "snaripp studo",
              "snariip stodio",
              "snarip stoudio",
              "snarpi studos",
              "snorip studios",
              "snerip studeo",
              "snatip studios",
              "smarip stuidio",
              "snarip stud.io",
              "snarp studeo",
            ],
            url: typeof window !== "undefined" ? window.location.origin : "",
            image:
              "https://cdn.builder.io/api/v1/image/assets%2Ff48aa15f6f184b529ed3ca882d1ea006%2F80b9e9b58c234d4ebeea01c935603c20?format=webp&width=800",
            email: "snaripstudio@gmail.com",
            telephone: "+916386873180",
            areaServed: [
              { "@type": "Place", name: "Greater Noida" },
              { "@type": "Place", name: "Noida" },
              { "@type": "Place", name: "Gurgaon" },
              { "@type": "Place", name: "Gurugram" },
            ],
            sameAs: [
              "https://www.linkedin.com/company/snarip-studio",
              "https://www.instagram.com/snaripstudio/",
            ],
          }),
        }}
      />

      {/* Footer */}
      <footer className="bg-background border-t border-border text-foreground px-4 md:px-8 py-16 relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <span className="text-[20rem] font-montserrat">SNARIP</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 animate-on-scroll fade-up">
            {/* Column 1: Links */}
            <div>
              <h3 className="font-montserrat text-lg mb-6 font-semibold">
                NAVIGATION
              </h3>
              <nav className="space-y-4">
                <a
                  href="#about"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </a>
                <a
                  href="#work"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="/contact"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Column 2: Social Links */}
            <div>
              <h3 className="font-montserrat text-lg mb-6 font-semibold">
                CONNECT
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/company/snarip-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/snaripstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-16 pt-8 text-center text-sm text-muted-foreground">
            © 2024 SnaripStudio. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: hsl(var(--primary));
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* Simple Scroll Animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.fade-up {
          transform: translateY(40px);
        }

        .animate-on-scroll.fade-left {
          transform: translateX(40px);
        }

        .animate-on-scroll.fade-right {
          transform: translateX(-40px);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }

        .animate-on-scroll.delay-100 {
          transition-delay: 100ms;
        }

        .animate-on-scroll.delay-200 {
          transition-delay: 200ms;
        }

        .animate-on-scroll.delay-300 {
          transition-delay: 300ms;
        }

        /* Hero Section Gradient */
        .hero-gradient {
          background: linear-gradient(
            135deg,
            #ff5722 0%,
            #ff8a65 25%,
            #ffab91 50%,
            #ff7043 75%,
            #d84315 100%
          );
        }

        /* Animated Blob Shapes */
        .blob-shape {
          position: absolute;
          border-radius: 50% 30% 70% 40%;
          filter: blur(1px);
          mix-blend-mode: screen;
          opacity: 0.8;
        }

        .blob-1 {
          width: 400px;
          height: 300px;
          top: 10%;
          right: -10%;
          background: linear-gradient(45deg, #ff5722, #ff6b6b, #ff8a80);
          animation:
            blob1Move 12s ease-in-out infinite,
            blob1Morph 8s ease-in-out infinite;
          animation-delay: 0s;
        }

        .blob-2 {
          width: 350px;
          height: 280px;
          top: 40%;
          right: 5%;
          background: linear-gradient(120deg, #e91e63, #ff4081, #f8bbd9);
          animation:
            blob2Move 15s ease-in-out infinite,
            blob2Morph 10s ease-in-out infinite;
          animation-delay: -2s;
        }

        .blob-3 {
          width: 300px;
          height: 250px;
          top: 70%;
          right: -5%;
          background: linear-gradient(200deg, #ff9800, #ffab40, #ffe0b2);
          animation:
            blob3Move 18s ease-in-out infinite,
            blob3Morph 12s ease-in-out infinite;
          animation-delay: -4s;
        }

        /* Blob Movement Animations */
        @keyframes blob1Move {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(-30px, -20px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translate(20px, 30px) rotate(240deg) scale(0.9);
          }
        }

        @keyframes blob2Move {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(40px, -30px) rotate(90deg) scale(1.2);
          }
          50% {
            transform: translate(-20px, 40px) rotate(180deg) scale(0.8);
          }
          75% {
            transform: translate(30px, 10px) rotate(270deg) scale(1.1);
          }
        }

        @keyframes blob3Move {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-40px, -40px) rotate(180deg) scale(1.3);
          }
        }

        /* Blob Morphing Animations */
        @keyframes blob1Morph {
          0%,
          100% {
            border-radius: 50% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 40% 70%;
          }
          50% {
            border-radius: 60% 40% 30% 80%;
          }
          75% {
            border-radius: 40% 80% 60% 30%;
          }
        }

        @keyframes blob2Morph {
          0%,
          100% {
            border-radius: 60% 40% 80% 20%;
          }
          33% {
            border-radius: 40% 80% 20% 60%;
          }
          66% {
            border-radius: 80% 20% 60% 40%;
          }
        }

        @keyframes blob3Morph {
          0%,
          100% {
            border-radius: 40% 60% 50% 80%;
          }
          50% {
            border-radius: 80% 30% 70% 50%;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .blob-1,
          .blob-2,
          .blob-3 {
            width: 250px;
            height: 200px;
            opacity: 0.6;
          }

          .blob-1 {
            top: 60%;
            right: -20%;
          }

          .blob-2 {
            top: 80%;
            right: -10%;
          }

          .blob-3 {
            top: 90%;
            right: -15%;
          }
        }

        /* Animated Background Lines */
        .background-lines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }

        .line {
          position: absolute;
          background: linear-gradient(
            90deg,
            transparent 0%,
            hsl(var(--border)) 50%,
            transparent 100%
          );
          transform: rotate(-15deg);
        }

        .line-1 {
          width: 1px;
          height: 200vh;
          left: 10%;
          animation: moveVertical 20s linear infinite;
          animation-delay: 0s;
        }

        .line-2 {
          width: 1px;
          height: 200vh;
          left: 25%;
          animation: moveVertical 25s linear infinite;
          animation-delay: -5s;
        }

        .line-3 {
          width: 1px;
          height: 200vh;
          left: 45%;
          animation: moveVertical 30s linear infinite;
          animation-delay: -10s;
        }

        .line-4 {
          width: 1px;
          height: 200vh;
          left: 65%;
          animation: moveVertical 22s linear infinite;
          animation-delay: -15s;
        }

        .line-5 {
          width: 1px;
          height: 200vh;
          left: 80%;
          animation: moveVertical 28s linear infinite;
          animation-delay: -8s;
        }

        .line-6 {
          width: 1px;
          height: 200vh;
          left: 90%;
          animation: moveVertical 24s linear infinite;
          animation-delay: -12s;
        }

        @keyframes moveVertical {
          0% {
            transform: translateY(-100vh) rotate(-15deg);
          }
          100% {
            transform: translateY(100vh) rotate(-15deg);
          }
        }

        /* Add some horizontal movement too */
        .line:nth-child(odd) {
          animation:
            moveVertical 20s linear infinite,
            sway 8s ease-in-out infinite;
        }

        .line:nth-child(even) {
          animation:
            moveVertical 25s linear infinite,
            sway 6s ease-in-out infinite reverse;
        }

        @keyframes sway {
          0%,
          100% {
            transform: translateX(0px) translateY(-100vh) rotate(-15deg);
          }
          50% {
            transform: translateX(20px) translateY(-100vh) rotate(-15deg);
          }
        }

        /* Special animations for different elements */
        .fade-in-scale {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
          transition: all 0.6s ease-out;
        }

        .fade-in-scale.animate-in {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* Floating animation for CTA button */
        .floating-cta {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Smooth reveal for testimonial */
        .testimonial-reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .testimonial-reveal.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </div>
  );
}
