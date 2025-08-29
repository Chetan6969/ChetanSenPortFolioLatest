import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Chetan Sen
            </h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              System Administrator, DevOps Engineer & Full-Stack Developer passionate about 
              building scalable, efficient solutions.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="h-9 w-9">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="order-3 lg:order-2">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="order-2 lg:order-3">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
            <div className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
              <p className="break-all">chetansen2004@gmail.com</p>
              <p>+91 6263587072</p>
              <p>Arjun Nagar, Pateri, Satna, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Chetan Sen. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" /> and lots of coffee☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};