import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, FileText, Github } from "lucide-react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Developed a scalable e-commerce system with user authentication, product management, secure checkout, and integrated payment gateway.",
      image: "/E-Commerce.jpg",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      caseStudy: "/case-studies/E-Commerce%20Platform.pdf",
      live: "#",
    },
    {
      title: "TP SOW Portal App",
      description:
        "A complete SOW and task automation portal with approval workflows, role-based authentication, reporting dashboards, and WSDL-based service integrations.",
      image: "/TP-Portal.png",
      tech: [".NET Core MVC", "C#", "Entity Framework", "SQL Server", "SOAP"],
      caseStudy: "/case-studies/TP%20SOW%20Portal.pdf",
      live: "https://wf5.myhcl.com/TPSOW",
    },
    {
      title: "Vendor Portal",
      description:
        "Vendor onboarding and invoice management system with authentication, contract tracking, and secure internal communication.",
      image: "/Vendor_Portal.webp",
      tech: [".NET Core", "C#", "SQL Server", "SOAP Services"],
      caseStudy: "/case-studies/Vendor%20Portal.pdf",
      live: "https://wf6.myhcl.com/VendorPortal",
    },
    {
      title: "SuccessFactors Integration",
      description:
        "Integrated SAP SuccessFactors with internal HR system for employee master sync, payroll mapping, and automated data scheduling.",
      image: "/sap.jpg",
      tech: [".NET Core", "C#", "Web API", "SQL Server"],
      caseStudy: "/case-studies/SuccessFactors%20Integration.pdf",
      live: "https://wf5.myhcl.com/SFIntegration",
    },
    {
      title: "Account Information System",
      description:
        "A complete AIS system including account creation, ledger management, transaction history, and custom report generator.",
      image: "/AIS.jpg",
      tech: ["ASP.NET MVC", "C#", "SQL Server", "SOAP"],
      caseStudy: "/case-studies/Account%20Information%20System.pdf",
      live: "https://wf5.myhcl.com/AIS",
    },
    {
      title: "Talent Submission Portal",
      description:
        "Talent submission and tracking platform with CQRS pattern, role-based control, and secure document uploads.",
      image: "/Talent.jpg",
      tech: [".NET Core 9", "C#", "SQL Server", "CQRS"],
      caseStudy: "/case-studies/Talent%20Submission%20Portal.pdf",
      live: "#",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my professional contributions and application
            development experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card-gradient border-border shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="h-48 bg-muted/30 flex items-center justify-center border-b border-border group-hover:bg-primary/5 transition-colors duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary/50 text-xs rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                 <a href={project.caseStudy}
                 target="_blank" 
                  download
                  className="flex-1"
                >
                    <Button variant="portfolio" size="sm" className="w-full">
                      <FileText className="w-4 h-4 mr-2" /> Case Study
                      </Button>
                </a>

                 {project.live !== "#" ? (
    <a
      href={project.live}
      target="_blank"
      className="flex-1"
    >
      <Button variant="hero" size="sm" className="w-full">
        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
      </Button>
    </a>
  ) : (
    <Button
      variant="hero"
      size="sm"
      disabled
      className="flex-1 opacity-50 cursor-not-allowed"
    >
      <ExternalLink className="w-4 h-4 mr-2" /> No Demo
    </Button>
  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
