import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/src/assets/E-Commerce.jpg",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "TP SOW Portal App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced analytics.",
      image: "/src/assets/TP-Portal.png",
      tech: [".Net Core MVC", "C#", 'EntityFramework', "SQL Server", "WSDL"],
      github: "#",
      live: "#"
    },
    {
      title: "Vendor Portal",
      description: "Vendor management system with secure login, profile management, Invoice Management, and order tracking functionalities.",
      image: "/src/assets/Vendor_Portal.webp",
      tech: [".Net Core", "C#", "Sql Server", "Wsdl"],
      github: "#",
      live: "#"
    },
    {
      title: "Success Factor",
      description: "Integration of SuccessFactors with internal HR systems for seamless data synchronization and reporting.",
      image: "/src/assets/sap.jpg",
      tech: [".Net Core", "C#", "WEP API", "Sql Server"],
      github: "#",
      live: "#"
    },
    {
      title: "Account Information System",
      description: "A comprehensive account management system with features like account creation, transaction history, and reporting tools.",
      image: "/src/assets/AIS.jpg",
      tech: ["ASP.Net MVC", "C#", "Sql Server", "WSDL"],
      github: "#",
      live: "#"
    },
    {
      title: "Talent Submission Portal",
      description: "A portal for submitting and tracking talent applications, with role-based access and notification system.",
      image: "/src/assets/Talent.jpg",
      tech: [".Net Core 9", "C#", "Sql Server", "CQRS Pattern"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card-gradient border-border shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-muted/30 flex items-center justify-center border-b border-border group-hover:bg-primary/5 transition-colors duration-300">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                 <img src={project.image} alt={project.title}  style={{ width: '100%', height: '100%' }} />
                </span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-secondary/50 text-xs rounded border border-border/50 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="portfolio" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;