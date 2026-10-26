import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-20" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div
            aria-label="Maneesha Yadav initials"
            className="flex items-center justify-center w-36 h-36 mx-auto mb-8 rounded-full border-4 border-white bg-card-gradient text-5xl font-bold text-primary shadow-lg"
          >
            MY
          </div>

          <div className="flex justify-center mb-3">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Placement &amp; Training Professional
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-6">
            Ahmedabad, Gujarat, India
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Maneesha Yadav
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Placement, training, and quality professional with 4+ years of
            experience across DDU-GKY programs, candidate support, employer
            partnerships, logistics training, and compliance. I help people
            move from training to meaningful employment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="#experience">View Experience</a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="/myresume/ManeeshaYadav_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:manishayadavp21@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
            <a
              href="mailto:manishayadavp21@gmail.com"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              manishayadavp21@gmail.com
            </a>
            <a
              href="tel:+917999605287"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 79996 05287
            </a>
          </div>

          <div className="animate-bounce mt-12">
            <a href="#about" aria-label="Scroll to About">
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
