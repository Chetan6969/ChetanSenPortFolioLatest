import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Cloud, Code, Database } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "System Administration",
      description: "5+ years managing Linux servers and infrastructure"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "DevOps & Cloud",
      description: "Expert in Docker, Kubernetes, AWS, and CI/CD pipelines"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Node.js"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "PostgreSQL, MongoDB, Redis administration and optimization"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate technologist with expertise spanning system administration, 
            DevOps practices, and full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started as a Linux enthusiast, evolved into a full-stack developer with deep 
                expertise in system administration and DevOps. I love building efficient, 
                scalable systems and automating complex workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience spans from managing bare-metal servers to orchestrating 
                containerized applications in the cloud. I believe in infrastructure as code, 
                continuous integration, and making systems that just work.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {["Linux Administration", "Docker & Kubernetes", "AWS/GCP", "Terraform", 
                  "Ansible", "CI/CD", "React", "Node.js", "Python", "Bash Scripting"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gradient-card border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-primary text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
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