import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led infrastructure automation initiatives reducing deployment time by 60%",
        "Architected and managed Kubernetes clusters serving 100k+ daily users",
        "Implemented comprehensive monitoring and logging with Prometheus and ELK stack",
        "Mentored junior developers on DevOps best practices and cloud technologies"
      ],
      technologies: ["Kubernetes", "AWS", "Terraform", "Docker", "Jenkins", "Python"]
    },
    {
      title: "Full Stack Developer & SysAdmin",
      company: "Digital Innovations Inc",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: [
        "Developed and maintained React-based web applications with Node.js backends",
        "Managed Linux server infrastructure supporting mission-critical applications",
        "Automated deployment pipelines using GitLab CI/CD and Docker",
        "Implemented database optimization strategies improving query performance by 40%"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Linux", "GitLab CI"]
    },
    {
      title: "Linux System Administrator",
      company: "CloudServe Technologies",
      location: "Denver, CO",
      period: "2018 - 2020",
      description: [
        "Administered 200+ Linux servers across multiple data centers",
        "Implemented automated backup and disaster recovery solutions",
        "Configured and maintained web servers (Apache, Nginx) and databases",
        "Developed monitoring scripts and automation tools using Bash and Python"
      ],
      technologies: ["Linux", "Bash", "Python", "Nginx", "MySQL", "Zabbix"]
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      location: "Seattle, WA",
      period: "2017 - 2018",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Collaborated with design teams to implement pixel-perfect UIs",
        "Participated in code reviews and agile development processes",
        "Learned foundational DevOps practices and Linux system administration"
      ],
      technologies: ["JavaScript", "React", "CSS", "Git", "Linux Basics"]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A journey through various roles, building expertise across the technology stack
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl mb-2">{exp.title}</CardTitle>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CalendarDays className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gradient-card border-primary/20 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};