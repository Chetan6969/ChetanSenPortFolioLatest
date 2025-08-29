import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "chetansen2004@gmail.com",
      href: "mailto:chetansen2004@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 62635-87072",
      href: "tel:+000000000000"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Arjun Nagar, Pateri, Satna, Madhya Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      username: "@Chetan Sen",
      href: "https://github.com/Chetan6969"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      username: "/in/chetansen",
      href: "https://linkedin.com/in/johndoehttps://www.linkedin.com/in/chetan-sen-749a64284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Ready to discuss your next project or opportunity? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                I'm always interested in hearing about new opportunities, challenging projects, 
                or just connecting with fellow technology enthusiasts.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-3 sm:p-4">
                    <a href={item.href} className="flex items-center gap-3 sm:gap-4 group">
                      <div className="p-2 rounded-lg bg-gradient-primary text-white group-hover:scale-110 transition-transform flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base truncate">{item.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Follow Me</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-3 sm:p-4">
                      <a href={social.href} className="flex items-center gap-3 group">
                        <div className="p-2 rounded-lg bg-gradient-primary text-white group-hover:scale-110 transition-transform flex-shrink-0">
                          {social.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm text-muted-foreground">{social.label}</p>
                          <p className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors truncate">{social.username}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm order-1 lg:order-2">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium">Name</label>
                  <Input placeholder="Your name" className="h-10 sm:h-11" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="h-10 sm:h-11" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium">Subject</label>
                <Input placeholder="What's this about?" className="h-10 sm:h-11" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or just say hello..." 
                  rows={5}
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" className="w-full h-11 sm:h-12">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};