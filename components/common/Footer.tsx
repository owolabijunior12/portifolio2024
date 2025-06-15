import { Github, Linkedin } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="  dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Iboytech. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/owolabijunior12" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://ng.linkedin.com/in/owolabi-destiny-oluwanifemi-231222265" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/Iboytech123" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}