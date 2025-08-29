import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Terminal } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 pt-14 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 text-primary justify-center lg:justify-start">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-mono">~/portfolio $</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  System Administrator
                </span>
                <br />
                <span className="text-foreground">& DevOps Engineer</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Full-stack developer passionate about Linux systems, cloud infrastructure, 
                and building scalable solutions. Transforming ideas into robust, automated systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="sm" className="h-10 w-10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-glow max-w-md mx-auto lg:max-w-none">
              <img 
                src={heroImage} 
                alt="Developer workspace with multiple screens and code"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-hero rounded-full blur-xl opacity-60"></div>
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-primary rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};