import {mycv} from "../app/assets"
import { RainbowButton } from "@/components/ui/rainbow-button";




export default function Hero() {
  return (
    <section className=" h-[85vh] md:px-8 flex relative justify-center items-center dark:bg-gray-800 dark:text-white py-20">          
        <div className="mb-8 md:mb-0">
          <h1 className="text-7xl font-bold text-center   mb-4">Hello, I&apos;m Owolabi Destiny O.</h1>
          <p className="text-2xl font-semibold w-full text-center dark:text-gray-300 mb-6">
            A passionate software developer specializing in web technologies <br/> and creating amazing user experiences.
          </p>
          <div className='w-full flex  gap-9 justify-center items-center'>
            <RainbowButton url={"/About"}>About Me</RainbowButton>
            <RainbowButton url={"/Project"}>Take me to <br />the project</RainbowButton>
            <RainbowButton url={mycv}  >Download my Cv</RainbowButton>   
          </div>
        </div>             
    </section>
  )
}