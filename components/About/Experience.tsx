import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Softway Finance',
    duration: 'Nov 2023 – Present',
    description: [
      "Spearheading the development of scalable and secure contactless payment solutions across Africa.",
      "Collaborating with cross-functional teams to design and implement innovative payment systems.",
      "Utilizing JavaScript, TypeScript, and C++ to build robust backend services and embedded systems.",
      "Ensuring compliance with industry standards and regulations in financial technology."
    ]
  },
  {
    title: 'Frontend Developer (Contract)',
    company: 'Rabah360',
    duration: 'Aug 2024 – Present',
    description: [
      "Developed responsive and visually appealing user interfaces using HTML5, CSS3, JavaScript, and frameworks like React.js.",
      "Ensured cross-browser compatibility and mobile responsiveness across various devices and platforms.",
      "Optimized web applications for performance, improving load times and overall user experience (UX).",
      "Worked with version control systems like Git and GitHub to maintain code integrity and collaborate with other developers."
    ]
  },
  {
    title: 'Software Developer (Freelancer)',
    company: 'Fiverr',
    duration: 'Mar 2023 – Present',
    description:[
      "Designed, developed, and deployed fully responsive websites and web applications using the MERN stack.",
      "Implemented front-end interfaces with modern JavaScript frameworks such as React, ensuring optimal user experience and performance.",
      "Utilized version control systems like Git and GitHub to maintain clean code and manage multiple projects.",
      "Communicated with clients to gather requirements, provide regular updates, and deliver on-time milestones."
    ]
  },
  {
    title: 'Web Developer (Intern)',
    company: 'Instaskool Ltd.',
    duration: 'Jan 2023 – Mar 2023',
    description: [
      "Created responsive websites for clients, worked with Mern stack solutions.",
      "Assisted in the maintenance and updating of existing websites.",
      "Collaborated with the development team to implement new features and functionalities.",
      "Gained hands-on experience in web development and client communication."
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="pt-20 dark:bg-gray-800">
      <div className="container mx-auto px-">
        <h2 className="text-3xl font-bold text-center dark:text-white mb-8">Work Experience</h2>
        <div className="space-y-6 flex justify-center items-center w-full flex-col">
          {experiences.map(({ title, company, duration, description }, index) => (
            <Card key={index} className="w-full max-w-3xl">
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <div className="relative  h-14 m-1 rounded-full border-green-400 border-2 min-w-14">
                     <Image
                        src={''}
                        alt={'company-logo'}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                     />
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{company} | {duration}</CardDescription>
                </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
