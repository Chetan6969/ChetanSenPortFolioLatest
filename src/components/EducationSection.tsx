import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "AKS University ",
      location: "Sherganj, Satna, Madhya Pradesh, India",
      period: "2022 - Present",
      cgpa: "8.1/10.0",
      description: "Focused on systems programming, network administration, and software engineering principles.",
      courses: ["Operating Systems", "Computer Networks", "Database Systems", "Software Engineering", "Data Structures"]
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Govt. Higher Sec. School, Sohawal",
      location: "Satna, Madhya Pradesh, India",
      period: "2020 - 2022",
      Percentage: "80%",
      description: "Foundation in Physics, Chemistry and Mathematics (PCM).",
      courses: ["Physics", "Chemistry", "Computer", "Mathematics"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-PSA-123456",
      status: "Active"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-789012",
      status: "Active"
    },
    {
      name: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      date: "2021",
      credentialId: "RHCSA-345678",
      status: "Active"
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2020",
      credentialId: "DCA-901234",
      status: "Active"
    }
  ];

  const continuousLearning = [
    "Advanced Kubernetes Administration",
    "Terraform Infrastructure as Code",
    "Python for DevOps",
    "Cloud Security Best Practices",
    "Microservices Architecture",
    "Machine Learning for Operations"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Formal Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="space-y-1">
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location} • {edu.period}</p>
                    <p className="text-sm font-medium">CGPA: {edu.cgpa}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{edu.description}</p>
                  <div>
                    <h5 className="font-medium mb-2">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary" className="bg-gradient-card border-primary/20">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Professional Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-primary text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">
                      Issued: {cert.date} • ID: {cert.credentialId}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Learning */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <CardTitle>Continuous Learning</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Currently expanding knowledge in emerging technologies and advanced practices:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {continuousLearning.map((topic, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-primary"></span>
                  <span className="text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};