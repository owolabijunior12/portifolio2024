import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectLink {
  type: string;
  href: string;
  icon: "website" | "github";
}

interface Project {
  title: string;
  href?: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getIcon = (iconType: "website" | "github") => {
    switch (iconType) {
      case "website":
        return <Globe className="w-4 h-4" />;
      case "github":
        return <Github className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <Card className="group h-full relat flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
          <Image
            src={project.image}
            // src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop";
            }}
          />
        </div>
        {project.active && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-green-500/90 text-white">
              Active
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          {project.dates}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs px-2 py-1 bg-secondary/50 hover:bg-secondary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {project.links.length > 0 && (
        <CardFooter className="pt-4 gap-2">
          {project.links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              asChild
              className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {getIcon(link.icon)}
                {link.type}
              </a>
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;