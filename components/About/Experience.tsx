import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from 'react'

const experiences = [
  {
    title: 'Frontend Developer (Contract)',
    company: 'Rabah360.',
    duration: 'Aug 2024 - Present',
    description: [
     
      "Developed responsive and visually appealing user interfaces using HTML5, CSS3, JavaScript, and frameworks like React.js ",
      "Ensured cross-browser compatibility and mobile responsiveness across various devices and platforms.",
      "Optimized web applications for performance, improving load times and overall user experience (UX).",
      "Worked with version control systems like Git and GitHub to maintain code integrity and collaborate with other developers."
    
    ]
  },
  {
    title: 'Software Developer (Freelancer)',
    company: 'Fiverr.',
    duration: 'Mar 2023 - Present',
    description:[ 
      " Designed, developed, and deployed fully responsive websites and web applications using MERN stack" ,
   " Implemented front-end interfaces with modern JavaScript frameworks such as React, ensuring optimal user experience and performance.",
    "Utilized version control systems like Git and GitHub to maintain clean code and manage multiple projects.",
   " Communicated with clients to gather requirements, provide regular updates, and deliver on-time milestones.,"
  ]
  },
  {
    title: 'Web Developer (Intern)',
    company: 'Instaskool Ltd.',
    duration: 'Jan 2023 - Mar 2023',
    description: 'Created responsive websites for clients, worked with WordPress and custom PHP solutions.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20  dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map(({title,company,duration,description}, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{company} | {duration}</CardDescription>
              </CardHeader>
              <CardContent>
                      {/* {
                        description.map((data: string, index) => (
                          <li key={index}>{data}</li>
                        ))
                      } */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}