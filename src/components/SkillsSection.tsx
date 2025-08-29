import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "System Administration",
      skills: [
        { name: "Linux (Ubuntu, CentOS, RHEL)", level: 95 },
        { name: "Shell Scripting (Bash, Zsh)", level: 90 },
        { name: "Network Configuration", level: 85 },
        { name: "Security & Hardening", level: 80 },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker & Containerization", level: 90 },
        { name: "Kubernetes", level: 80 },
        { name: "AWS (EC2, S3, RDS, Lambda)", level: 70 },
        { name: "Terraform", level: 80 },
        { name: "Ansible", level: 90 },
        { name: "Jenkins/GitLab CI", level: 80 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C/C++", level: 95 },
        { name: "Bash", level: 95 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "Node.js/Express", level: 85 },
        { name: "PostgreSQL/MongoDB", level: 90 },
        { name: "RESTful APIs", level: 90 },
      ]
    }
  ];

  const tools = [
    "Git", "Nginx", "Apache", "Redis", "ElasticSearch", "Grafana", "Prometheus", 
    "Zabbix", "Vim/Neovim", "VS Code", "Postman", "Slack", "Jira"
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm font-medium truncate pr-2">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground flex-shrink-0">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 sm:h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge key={index} variant="outline" className="border-primary/30 hover:bg-gradient-card transition-colors text-xs sm:text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};