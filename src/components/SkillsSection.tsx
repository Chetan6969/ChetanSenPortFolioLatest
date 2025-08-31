import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

  const handleSkillHover = (categoryIndex, skillIndex, targetLevel) => {
    const skillKey = `${categoryIndex}-${skillIndex}`;
    setHoveredSkill(skillKey);
    
    // Reset animation
    setAnimatedSkills(prev => ({ ...prev, [skillKey]: 0 }));
    
    // Start animation
    const animationDuration = 1500; // 1.5 seconds
    const steps = 60; // 60 fps
    const increment = targetLevel / steps;
    let currentStep = 0;
    
    const animate = () => {
      currentStep++;
      const newValue = Math.min(currentStep * increment, targetLevel);
      
      setAnimatedSkills(prev => ({ ...prev, [skillKey]: newValue }));
      
      if (currentStep < steps && newValue < targetLevel) {
        setTimeout(animate, animationDuration / steps);
      }
    };
    
    setTimeout(animate, 50); // Small delay before starting
  };

  const handleSkillLeave = (categoryIndex, skillIndex) => {
    const skillKey = `${categoryIndex}-${skillIndex}`;
    setHoveredSkill(null);
    // Reset to zero when mouse leaves
    setAnimatedSkills(prev => ({ ...prev, [skillKey]: 0 }));
  };

  const getSkillValue = (categoryIndex, skillIndex, originalLevel) => {
    const skillKey = `${categoryIndex}-${skillIndex}`;
    return animatedSkills[skillKey] !== undefined ? animatedSkills[skillKey] : 0;
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const currentValue = getSkillValue(categoryIndex, skillIndex, skill.level);
                  const isHovered = hoveredSkill === skillKey;
                  
                  return (
                    <div 
                      key={skillIndex} 
                      className="space-y-2 cursor-pointer transform transition-all duration-200 hover:scale-102 p-2 rounded-lg hover:bg-muted/30"
                      onMouseEnter={() => handleSkillHover(categoryIndex, skillIndex, skill.level)}
                      onMouseLeave={() => handleSkillLeave(categoryIndex, skillIndex)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm font-medium truncate pr-2 transition-colors duration-200 hover:text-blue-600">
                          {skill.name}
                        </span>
                        <span className={`text-xs sm:text-sm font-bold transition-all duration-200 flex-shrink-0 ${
                          isHovered ? 'text-primary scale-110' : 'text-muted-foreground'
                        }`}>
                          {Math.round(currentValue)}%
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <Progress 
                          value={currentValue} 
                          className={`h-2 sm:h-3 transition-all duration-200 ${
                            isHovered ? 'shadow-md' : ''
                          }`}
                          style={{
                            background: 'linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 100%)'
                          }}
                        />
                        {isHovered && (
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-100 shadow-sm"
                            style={{ 
                              width: `${currentValue}%`,
                              background: skill.level >= 90 
                                ? 'linear-gradient(90deg, #10b981, #059669)' 
                                : skill.level >= 80 
                                ? 'linear-gradient(90deg, #3b82f6, #1d4ed8)'
                                : 'linear-gradient(90deg, #f59e0b, #d97706)'
                            }}
                          />
                        )}
                        {isHovered && currentValue > 5 && (
                          <div 
                            className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 transition-all duration-100"
                            style={{ 
                              left: `calc(${currentValue}% - 6px)`,
                              borderColor: skill.level >= 90 
                                ? '#059669' 
                                : skill.level >= 80 
                                ? '#1d4ed8'
                                : '#d97706'
                            }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-border/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 text-xs sm:text-sm hover:scale-105 hover:shadow-sm"
                >
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