import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const educations = [
  {
    degree: 'National Diploma in Computer Science',
    institution: 'Yaba College of Technology',
    duration: '2021 - 2023',
    description: 'Focused on core areas of Computer Science with a specialization in Machine Learning and Distributed Systems. Gained hands-on experience in building intelligent systems, data-driven applications, and scalable architectures.'
  },
  {
    degree: 'Completion  of Frontend Web Development ',
    institution: 'Aptlearn',
    duration: '2022',
    description: 'Focused on core areas of Computer Science with a specialization in Machine Learning and Distributed Systems. Gained hands-on experience in building intelligent systems, data-driven applications, and scalable architectures.'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 w-full dark:bg-gray-900">
      <div className="container mx-auto w-full ">
        <h2 className="text-3xl font-bold text-center  dark:text-white mb-8">Education</h2>
        <div className="space-y-6 flex justify-center items-center   flex-col">
          {educations.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" dark:text-gray-300">{edu.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}