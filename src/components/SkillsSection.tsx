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
        { name: "Security & Hardening", level: 88 },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker & Containerization", level: 92 },
        { name: "Kubernetes", level: 85 },
        { name: "AWS (EC2, S3, RDS, Lambda)", level: 88 },
        { name: "Terraform", level: 80 },
        { name: "Ansible", level: 85 },
        { name: "Jenkins/GitLab CI", level: 87 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Go", level: 75 },
        { name: "Bash", level: 95 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React/Next.js", level: 88 },
        { name: "Node.js/Express", level: 85 },
        { name: "PostgreSQL/MongoDB", level: 82 },
        { name: "RESTful APIs", level: 90 },
      ]
    }
  ];

  const tools = [
    "Git", "Nginx", "Apache", "Redis", "ElasticSearch", "Grafana", "Prometheus", 
    "Zabbix", "Vim/Neovim", "VS Code", "Postman", "Slack", "Jira"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge key={index} variant="outline" className="border-primary/30 hover:bg-gradient-card transition-colors">
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