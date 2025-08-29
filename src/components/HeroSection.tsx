import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Terminal } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Terminal className="w-5 h-5" />
                <span className="text-sm font-mono">~/portfolio $</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  System Administrator
                </span>
                <br />
                <span className="text-foreground">& DevOps Engineer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Full-stack developer passionate about Linux systems, cloud infrastructure, 
                and building scalable solutions. Transforming ideas into robust, automated systems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Developer workspace with multiple screens and code"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full blur-xl opacity-60"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};