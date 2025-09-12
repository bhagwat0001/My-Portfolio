import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-text-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card-gradient border-border shadow-elegant">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <Input placeholder="Your Name" className="bg-background/50 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50 border-border" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                <Input placeholder="Project Discussion" className="bg-background/50 border-border" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  rows={6}
                  className="bg-background/50 border-border resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll do my best 
                to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-card-gradient border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">alex@developer.com</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-card-gradient border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-card-gradient border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card className="p-6 bg-hero-gradient shadow-glow border border-primary/20">
              <h4 className="font-semibold text-primary-foreground mb-2">Available for Freelance</h4>
              <p className="text-primary-foreground/80 text-sm">
                Currently accepting new projects for Q2 2024. Let's build something amazing together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;