 "use client"; 
import { motion } from 'framer-motion';
import Image from 'next/image';
import Education from "@/components/About/Educaion";
import Experience from "@/components/About/Experience";
import Skills from "@/components/About/Skills";
import BackgroundAnimations from '@/components/hero/BackgroundAnimations';
import WorkspaceDemo from '@/components/hero/WorkspaceDemo';
import FloatingPanels from '@/components/hero/FloatingPanels';

export default function Page() {
  return (
    <div className="p-4 relative">
      <BackgroundAnimations />
      <WorkspaceDemo />
      <FloatingPanels />

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl relative md:text-5xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-green mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Portrait Image Section */}
            <div className="lg:col-span-4 xl:col-span-3 flex justify-center">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-full lg:max-w-[280px] lg:h-[340px]">
                {/* Glow effect behind image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green/30 via-green/20 to-blue-500/30 rounded-2xl blur-xl opacity-60" />
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gradient-to-b from-green/5 to-transparent">
                  <Image
                    src="https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788514997/myportfolio/agaaeq22nswjezdvhlmi.png" // Replace with your image path
                    alt="Professional Portrait"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
                  />
                  
                  {/* Professional gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green via-green/50 to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-green/20 rounded-xl -z-10" />
                <div className="absolute -top-3 -left-3 w-12 h-12 border-2 border-green/10 rounded-full -z-10" />
              </div>
            </div>

            {/* Text Section */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className="space-y-5">
                  {/* Professional title */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-xs font-medium bg-green/20 text-green rounded-full border border-green/20">
                      Software Engineer
                    </span>
                    <span className="px-3 py-1 text-xs font-medium  rounded-full border border-green/20">
                      Embedded Systems
                    </span>
                    <span className="px-3 py-1 text-xs font-medium  rounded-full border border-green/20">
                      IoT Specialist
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed ">
                    Graduating from <span className="text-green font-semibold">Yaba College of Technology</span> in 2022 with an OND in Computer Science, my academic foundation has supported my growth in software and embedded systems engineering. I hold certifications in <span className="text-green font-semibold">Frontend Web Development</span> from aptLearn and <span className="text-green font-semibold">Introduction to IoT</span> from Cisco, which have enhanced my technical skills and industry readiness.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed ">
                    During my tenure as an <span className="text-green font-semibold">Embedded System Engineer</span> and <span className="text-green font-semibold">Software Engineer</span> at Softway Finance, I worked collaboratively to develop solutions using <span className="text-green font-semibold">Django, MongoDB, and React</span>. My experience also includes training AI models, with a focus on bridging software and hardware systems. I am motivated to apply my expertise in creating impactful and innovative technology-driven solutions.
                  </p>
                  
                  {/* Professional stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green">2022</div>
                      <div className="text-xs text-gray-400 mt-1">Graduation Year</div>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <div className="text-2xl font-bold text-green">3+</div>
                      <div className="text-xs text-gray-400 mt-1">Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green">Typescript</div>
                      <div className="text-xs text-gray-400 mt-1">Go • JavaScript</div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                    </span>
                    <span className="text-xs text-gray-400">Open to innovative technology opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}