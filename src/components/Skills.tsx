import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Placement & Employer Relations",
    skills: [
      "Placement coordination",
      "Employer partnerships",
      "Recruitment drives",
      "Candidate counseling",
      "Interview preparation",
      "Placement retention",
    ],
    icon: "🤝",
  },
  {
    title: "Training & Candidate Support",
    skills: [
      "Logistics operations",
      "Warehouse management",
      "Supply-chain fundamentals",
      "Employability skills",
      "Rural youth mobilization",
      "Training delivery",
    ],
    icon: "🎓",
  },
  {
    title: "Quality & Program Operations",
    skills: [
      "DDU-GKY programs",
      "Quality assurance",
      "Audit readiness",
      "SOP compliance",
      "Batch documentation",
      "MIS & reporting",
    ],
    icon: "✅",
  },
  {
    title: "Tools & Systems",
    skills: [
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "AEBAS",
      "SIP",
      "KB",
      "SF",
      "SOP",
    ],
    icon: "🛠️",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="bg-text-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Program delivery, candidate development, and placement operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 bg-card-gradient border-border shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2" aria-hidden="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 bg-secondary/50 rounded-lg text-sm text-center border border-border/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["English", "Hindi"].map((language) => (
                <span
                  key={language}
                  className="px-4 py-2 bg-secondary/50 border border-border/50 rounded-full text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Networking & monitoring",
                "Public speaking & teaching",
                "Travel & exploration",
                "Reading",
              ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-secondary/50 border border-border/50 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
