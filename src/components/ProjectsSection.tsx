import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Terraform-based infrastructure as code solution for AWS, managing multi-environment deployments with automated scaling and monitoring.",
      image: "/placeholder.svg",
      technologies: ["Terraform", "AWS", "Docker", "Kubernetes", "Prometheus"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "DevOps Dashboard",
      description: "Real-time monitoring dashboard built with React and Node.js, integrating multiple data sources for comprehensive infrastructure oversight.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Automated Deployment Pipeline",
      description: "Jenkins-based CI/CD pipeline with automated testing, security scanning, and multi-stage deployments for containerized applications.",
      image: "/placeholder.svg",
      technologies: ["Jenkins", "Docker", "SonarQube", "Ansible", "GitLab"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Server Monitoring System",
      description: "Custom monitoring solution using Python and Grafana, providing detailed insights into server performance and automated alerting.",
      image: "/placeholder.svg",
      technologies: ["Python", "Grafana", "InfluxDB", "Bash", "Systemd"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and complete DevOps deployment pipeline.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Log Analysis Tool",
      description: "Python-based log analysis tool with machine learning capabilities for predictive maintenance and anomaly detection.",
      image: "/placeholder.svg",
      technologies: ["Python", "Scikit-learn", "Elasticsearch", "Kibana", "Flask"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A showcase of my work spanning infrastructure automation, web development, and system administration
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300 group">
              <div className="aspect-video bg-gradient-card rounded-t-lg flex items-center justify-center">
                <div className="text-3xl sm:text-4xl opacity-50">🚀</div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="group-hover:text-primary transition-colors text-lg sm:text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-xs sm:text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-primary/30 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <Button variant="gradient" size="sm" className="w-full sm:w-auto">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Other Notable Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-gradient-card border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gradient-card border-primary/20">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 px-2 flex-1">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2 flex-1">
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
