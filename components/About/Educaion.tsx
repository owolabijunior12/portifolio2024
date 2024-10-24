import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const educations = [
  {
    degree: 'National Diploma in Computer Science',
    institution: 'Yaba College of Technology',
    duration: '2021 - 2023',
    description: 'Specialized in Machine Learning and Distributed Systems.',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Olabisi Onabanjo University',
    duration: '2024 - Present',
    // description: 'Graduated with honors. Capstone project: Developing a real-time collaboration platform.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20  dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Education</h2>
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{edu.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}