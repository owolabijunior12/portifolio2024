import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    image: '/',
    demo: 'https://demo1.com',
    code: 'https://github.com/username/project1',
  },
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    image: '/',
    demo: 'https://demo1.com',
    code: 'https://github.com/username/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/',
    demo: 'https://demo2.com',
    code: 'https://github.com/username/project2',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/',
    demo: 'https://demo2.com',
    code: 'https://github.com/username/project2',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/',
    demo: 'https://demo2.com',
    code: 'https://github.com/username/project2',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/',
    demo: 'https://demo2.com',
    code: 'https://github.com/username/project2',
  },  
]

export default function Projects() {
  return (
    <section id="projects" className="py-20  dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}