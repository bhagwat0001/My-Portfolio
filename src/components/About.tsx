import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-card-gradient border border-border shadow-elegant overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-hero-gradient opacity-20 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <Card className="p-6 bg-card-gradient border-border shadow-elegant">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital solutions that combine beautiful design with robust functionality. 
                I love turning complex problems into simple, elegant designs.
              </p>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-border shadow-elegant">
              <h3 className="text-2xl font-semibold mb-4 text-primary">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React, Node.js, and modern web technologies. From concept 
                to deployment, I build scalable applications that provide exceptional user 
                experiences and drive business results.
              </p>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-border shadow-elegant">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in clean code, thoughtful design, and continuous learning. 
                Every project is an opportunity to create something meaningful and push 
                the boundaries of what's possible on the web.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;