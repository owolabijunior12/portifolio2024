const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind Css', 'Git','github','JSON',"JWT",'OAuth',"webpack"
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20  dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center  dark:text-white mb-8">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 capitalize rounded-full px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }