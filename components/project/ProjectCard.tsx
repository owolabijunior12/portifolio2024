  import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Github,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
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
  myWork: string[];
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
    <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-border/50">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <span className="text-sm text-gray-500">
                Project Preview
              </span>
            </div>
          )}
        </div>

        {/* Active Badge 
        {project.active && (
          <div className="absolute top-3 right-3">
            <Badge
              variant="default"
              className="bg-green-500/90 text-white"
            >
              Active
            </Badge>
          </div>
        )}*/}
      </div>

      {/* Header */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </div>

        {/* <CardDescription className="text-sm text-muted-foreground">
          {project.dates}
        </CardDescription> */}
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1 space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div>
          <p className="text-xs font-medium text-foreground mb-2">
            Technologies
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs px-2 py-1 bg-secondary/50 hover:bg-secondary transition-colors"
              >
                {tech}
              </Badge>
            ))}

            {project.technologies.length > 6 && (
              <Badge
                variant="secondary"
                className="text-xs px-2 py-1 bg-secondary/50"
              >
                +{project.technologies.length - 6}
              </Badge>
            )}
          </div>
        </div>

        {/* What I Did */}
        {project.myWork?.length > 0 && (
          <details className="group/details border border-border/50 rounded-lg">
            <summary className="cursor-pointer list-none px-3 py-2.5 flex items-center justify-between text-sm font-medium hover:bg-muted/40 transition-colors">
              <span>What I did</span>

              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open/details:rotate-180" />
            </summary>

            <div className="px-3 pb-3 pt-1">
              <ul className="space-y-2">
                {project.myWork.map((work, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />

                    <span>{work}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        )}
      </CardContent>

      {/* Links */}
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
                className="flex items-center justify-center gap-2"
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