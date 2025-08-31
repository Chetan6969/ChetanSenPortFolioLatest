import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// ✅ Import images properly from src/assets
import web3ChessImg from "@/assets/web3Chess.png";
import hairFixImg from "@/assets/harifix.png";
import customeMemoryAllocator from "@/assets/CustomMemoryAllocator.png";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Web3 Chess Platform",
      description: "Built a decentralized Web3 chess platform integrating blockchain-based gameplay, player rankings, and secure match ownership.",
      image: web3ChessImg, // Updated to use imported image
      technologies: ["React.js", "Next.js", "TailwindCSS", "Node.js", "Express.js", "Solidity", "Ethereum", "Ethers.js", "Hardhat", "IPFS", "MongoDB", "Metamask"],
      liveUrl: "https://web3-chess.netlify.app/", // Replace with actual live URL
      githubUrl: "https://github.com/Chetan6969/Ether-Chess-OTC", // Replace with actual GitHub URL
      featured: true
    },
    {
      title: "He & She Hair Fix Unisex Salon",
      description: "He and She Hairfix Saloon Website an online platform empowering salon business operations with features such as appointment booking, client management, and responsive design.",
      image: hairFixImg,
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveUrl: "https://heandshehairfix.netlify.app",
      githubUrl: "https://github.com/Chetan6969/hairfix",
      featured: true
    },
    {
      title: "CustomMemoryAllocator",
      description: "Developed a custom memory allocator in C++ with a 2MB memory pool, supporting First Fit, Best Fit, and Buddy System allocation strategies, along with defragmentation and leak detection.",
      image: customeMemoryAllocator,
      technologies: ["C++", "Data Structures", "Memory Management", "Linked List", "Custom Allocator", "First Fit", "Best Fit", "Buddy System"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chetan6969/CustommemoryAllocator",
      featured: false
    },
    {
      title: "MyTube - YouTube Clone",
      description: "Built a YouTube-inspired video streaming platform with user authentication, video uploads, and real-time streaming using a modern full-stack architecture.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Cloudinary", "FFmpeg", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "http://github.com/Chetan6969/yt_project",
      featured: false
    },
    {
      title: "Personal Portfolio",
      description: "Designed and developed a responsive personal portfolio website showcasing projects, skills, and experience with modern UI components and smooth animations.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Next.js", "TailwindCSS", "TypeScript", "ShadCN/UI", "Lucide Icons", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chetan6969/sysadmin-devops-fullstack-showcase",
      featured: false
    },
    {
      title: "Log Analysis Tool",
      description: "Python-based log analysis tool capabilities for predictive maintenance and anomaly detection.",
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
                <img src={project.image} alt={project.title} className="object-cover w-full h-full rounded-t-lg" />
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
                  <Button variant="gradient" size="sm" className="w-full sm:w-auto" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
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
                    <Button variant="ghost" size="sm" className="h-8 px-2 flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2 flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
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
