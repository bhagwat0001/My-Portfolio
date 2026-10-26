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
            Connecting people, training, and employers to create lasting career outcomes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-card-gradient border border-border shadow-elegant overflow-hidden flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-7xl font-bold bg-text-gradient bg-clip-text text-transparent">
                    MY
                  </span>
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
              I’m a placement, training, and quality professional with more than four years of experience supporting DDU-GKY programs. My work spans candidate mobilization and counseling, employer partnerships, recruitment coordination, training quality, and placement follow-up.
              </p>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-border shadow-elegant">
              <h3 className="text-2xl font-semibold mb-4 text-primary">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
               I coordinate the complete journey from training to employment: preparing candidates, organizing recruitment drives, matching people with suitable roles, and maintaining strong employer relationships. I also manage program documentation, MIS, audits, and compliance.
              </p>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-border shadow-elegant">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I focus on practical candidate support, accurate records, and dependable follow-through. I value clear communication with candidates, training teams, and employers, while helping programs meet quality and placement goals.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;