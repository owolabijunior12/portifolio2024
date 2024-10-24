import Education from "@/components/About/Educaion";
import Experience from "@/components/About/Experience";
import Projects from "@/components/About/Projects";
import Skills from "@/components/About/Skills";

export default function Page() {
    return (
      <div className=" p-[70px] "> 
        <div className="flex flex-col my-6 justify-center items-center">
            <p className="w-[40%] text-xl  dark:bg-gray-300 p-[30px]">I&apos;m a Skilled Full Stack Stack Developer with over 2 years of experience creating responsive,user-friendly web applications using the HTML,CSS,Javascript and modern framework like React,nextjs for the frontend, Nodejs, Expressjs for the backend, Mongodb,firebase for the database. Strong expertise in building intuitive interface, optimizing performance, and ensuring the cross-browser compatibility ,Adept at collaborating with cross-functional teams and building and integrating APIs for dynamic content.Passionate about deivering exceptional user-experience and continually learning new technologies to enchance devloperment practices.</p>       
        </div>       
        <Education/>
        <Skills/>
        <Projects/>
        <Experience/>
      </div>
    )
  }