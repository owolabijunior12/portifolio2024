import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ProjectFilterProps {
  technologies: string[];
  selectedTech: string;
  onTechChange: (tech: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const ProjectFilter = ({
  technologies,
  selectedTech,
  onTechChange,
  searchTerm,
  onSearchChange,
}: ProjectFilterProps) => {
  return (
    <div className="space-y-6 mb-8">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-background/50 backdrop-blur-sm"
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          variant={selectedTech === "" ? "default" : "outline"}
          size="sm"
          onClick={() => onTechChange("")}
          className="transition-all duration-200"
        >
          All Projects
        </Button>
        {technologies.map((tech) => (
          <Button
            key={tech}
            variant={selectedTech === tech ? "default" : "outline"}
            size="sm"
            onClick={() => onTechChange(tech)}
            className="transition-all duration-200"
          >
            {tech}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;