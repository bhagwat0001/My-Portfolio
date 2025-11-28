import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["Angular", "React", "TypeScript", "Next.js", "Bootstrap CSS", "Html5/CSS3","JQuery/Javascript" ],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "C#", "Express", "PostgreSQL", "SQL Server"],
      icon: "⚙️"
    },
    {
      title: "Tools & Cloud",
      skills: [ "Docker", "Git", "TFS","Visual Studio"],
      icon: "🛠️"
    },
    {
      title: "Mobile & Other",
      skills: ["React Native", "Stripe"],
      icon: "📱"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-text-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card-gradient border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary/50 rounded-lg text-sm text-center border border-border/50 hover:bg-primary/10 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Always Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["AI/ML", "Web3", "Kubernetes", "Microservices"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-hero-gradient text-primary-foreground rounded-full text-sm font-medium shadow-glow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;