import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            For placement partnerships, training opportunities, or professional
            enquiries, please get in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card-gradient border-border shadow-elegant">
            <Mail className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:manishayadavp21@gmail.com"
              className="text-muted-foreground hover:text-primary break-all"
            >
              manishayadavp21@gmail.com
            </a>
          </Card>

          <Card className="p-6 bg-card-gradient border-border shadow-elegant">
            <Phone className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a
              href="tel:+917999605287"
              className="text-muted-foreground hover:text-primary"
            >
              +91 79996 05287
            </a>
          </Card>

          <Card className="p-6 bg-card-gradient border-border shadow-elegant">
            <MapPin className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Ahmedabad, Gujarat, India</p>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:manishayadavp21@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
