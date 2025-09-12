import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "🛒",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced analytics.",
      image: "📋",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Chat Assistant",
      description: "AI-powered chat application with natural language processing, context awareness, and integration with multiple AI models.",
      image: "🤖",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with interactive maps, forecasts, and location-based services. Built with modern React patterns.",
      image: "🌤️",
      tech: ["React", "D3.js", "Weather API", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics dashboard for social media metrics with data visualization and automated reporting features.",
      image: "📊",
      tech: ["Vue.js", "Python", "Chart.js", "Django"],
      github: "#",
      live: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with property listings, virtual tours, and advanced search functionality.",
      image: "🏠",
      tech: ["React", "Express", "MongoDB", "Mapbox"],
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
                  {project.image}
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