import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Terminal, Twitter, Code2 } from "lucide-react"; 
// ⬆️ Added Twitter & Code2 from lucide-react

// ✅ Changed to your portfolio image
import heroImage from "@/assets/chetan portfolio.png"; 

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 pt-14 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 text-primary justify-center lg:justify-start">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-mono">Chetan Sen</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  System Administrator
                </span>
                <br />
                <span className="text-foreground">& DevOps Engineer</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Full-stack developer passionate about Linux systems, cloud
                infrastructure, and building scalable solutions. Transforming
                ideas into robust, automated systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              {/* Download CV Button */}
              <a
                href="https://drive.google.com/file/d/1kRSYC4zEXuCC1ynIcpGRBfWFGSrr82K0/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </a>

              {/* Get In Touch Button */}
              <a href="mailto:chetansen2004@gmail.com" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Button>
              </a>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              {/* GitHub */}
              <a
                href="https://github.com/Chetan6969"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/chetan-sen-749a64284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>

              {/* Email */}
              <a href="mailto:chetansen2004@gmail.com">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </a>

              {/* LeetCode (using Code2 icon from lucide-react) */}
              <a
                href="https://leetcode.com/chetan2808/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10"
                  aria-label="LeetCode"
                >
                  <Code2 className="w-5 h-5" /> {/* ✅ replaced image with icon */}
                </Button>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/ChetaN_offcial?t=duBwOqo60qQPOSkY1bF1Ww&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-5 h-5" /> {/* ✅ replaced image with icon */}
                </Button>
              </a>
            </div>
          </div>

        <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
         <div className="relative rounded-2xl overflow-hidden shadow-glow max-w-md mx-auto lg:max-w-none">
          <img
            src={heroImage} // ✅ your portfolio image
            alt="Chetan Sen Portfolio"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
         {/* ❌ Removed gradient overlay */}
         </div>
         {/* Removed decorative gradient divs */}
         {/* <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-hero rounded-full blur-xl opacity-60"></div> */}
         {/* <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-primary rounded-full blur-xl opacity-40"></div> */}
        </div>

        </div>
      </div>
    </section>
  );
};
