"use client"

import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { FaGithub,FaLinkedinIn,FaReact,FaNodeJs,FaHtml5,FaGitAlt} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoJavascript, IoLogoVercel,} from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import TechBadge from "@/components/TechBadge"
import { PiFileSqlFill } from "react-icons/pi";
import { FaCircleDot } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm/ContactForm"

export default function Home() {
  return (

    <main className="mx-auto px-8 py-10 space-y-16">

      <nav className="fixed top-0 left-0 right-0 z-50 py-4 flex justify-center backdrop-blur-sm bg-white/1">
        <div className="top-nav-bar px-6 py-2 flex justify-center items-center shadow-md">
          
          {/* Menu Links */}
          <ul className="flex gap-6 justify-center items-center">
            <li><a href="#about" className="nav-link">About Me</a></li>
            <li><a href="#skills" className="nav-link">My Skills Set</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          
        </div>
      </nav>

      <section id="about" className="pt-20 max-w-7xl mx-auto px-4">

        <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
          
          <div className="flex-1">

            <p className="text-gray-600 text-lg">
              Hi!! Welcome to my Domain
            </p>

            <h1 className="text-4xl font-bold mt-2">
              Chapakorn Srisakwichai
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Computer Science Student interested in {" "}
              <span className="font-semibold text-black">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    1500,
                    "Software Engineer",
                    1500,
                    "Coding",
                    1500,
                    "AI",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>
            
              <ul className="flex gap-4 mt-4 text-4xl">
                <li>
                  <a href="#" className="hover:text-gray-500 transition">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
          </div>


          <div className="flex-1 flex justify-center">
            <Image
              src="/picture/pro.jpg"
              width={300}
              height={300}
              alt="profile"
              className="w-72 h-72 object-cover rounded-full"
            />
           </div>

        </div>  

      </section>

      
      <section className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-semibold">About Me</h2>

        <p className="mt-4 ">
          I am a Computer Science student passionate about building web applications.
        </p>
        <p className="mt-4 ">
          I enjoy working with frontend and backend technologies.
        </p>
        <p className="mt-4 ">
          Currently learning React, Tailwind CSS, and backend development.
        </p>
        <p className="mt-4 ">
          Interested in scalable systems and clean architecture.
        </p>

      </section>

      
      <section id="skills" className="scroll-mt-32 -mx-8">

        <div style={{ backgroundColor: '#fcdee2'}} className="flex flex-col items-center py-10 px-4">
          
          <h2 className="text-2xl font-semibold text-gray-500">My Skills Set</h2>

          <div className="mx-auto gap-6 mt-6 w-full max-w-2xl">
            <div className="flex flex-wrap gap-4 justify-center">
              <TechBadge name="React" icon={<FaReact className="text-blue-500"/>}/>
              <TechBadge name="Tailwind CSS" icon={<RiTailwindCssFill className="text-cyan-500"/>} />
              <TechBadge name="JavaScript" icon={<IoLogoJavascript className="text-yellow-500"/>} />
              <TechBadge name="TypeScript" icon={<SiTypescript className="text-blue-600"/>} />
              <TechBadge name="Node.js" icon={<FaNodeJs className="text-green-500"/>} />
              <TechBadge name="HTML" icon={<FaHtml5 className="text-orange-500"/>} />
              <TechBadge name="Git" icon={<FaGitAlt className="text-orange-500"/>} />
              <TechBadge name="Vercel" icon={<IoLogoVercel className="text-black"/>} />
              <TechBadge name="Firebase" icon={<IoLogoFirebase className="text-orange-500"/>} />
              <TechBadge name="SQL" icon={<PiFileSqlFill className="text-blue-500"/>} />
              <TechBadge name="Outsystems" icon={<FaCircleDot className="text-red-500"/>} />
            </div>        
          </div>

        </div>

      </section>

      
      <section id="projects" className="mt-20 scroll-mt-32 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

          {/* LEFT: รูป */}
          <div className="relative">
            <img
              src="/Picture/Project1.png"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT: ข้อมูล */}
          <div>

            <h3 className="text-2xl font-bold">
              Request Management System
            </h3>

            <p className="text-gray-400 mt-2">
              Designed and developed a request management system that allows users to submit feedback, 
              requests, and suggestions, with an approval workflow for supervisors and automated email notifications.
            </p>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Analyzed business requirements and translated them into system features</li>
              <li>• Designed system workflow for request submission and approval process</li>
              <li>• Built database structure to manage request data and user roles</li>
              <li>• Implemented approval/rejection flow with email notifications</li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              <TechBadge name="Outsystems" icon={<FaCircleDot className="text-red-500"/>} />
              <TechBadge name="Workflow Design"/>
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

          {/* LEFT: รูป */}
          <div className="relative">
            <img
              src="/Picture/Project2.png"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT: ข้อมูล */}
          <div>

            <h3 className="text-2xl font-bold">
              E-Expense Request System (Enterprise Application)
            </h3>

            <p className="text-gray-400 mt-2">
              Contributed to the development and maintenance of an enterprise expense 
              request system used within an organization, focusing on bug fixes, feature 
              enhancements, and UI improvements in an Agile sprint environment.
            </p>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Worked in an Agile sprint environment, handling assigned tasks and issue tracking</li>
              <li>• Identified and resolved bugs to improve system stability and user experience</li>
              <li>• Developed new UI pages and enhanced existing features based on business requirements</li>
              <li>• Collaborated with team members to deliver features within sprint timelines</li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              <TechBadge name="Outsystems" icon={<FaCircleDot className="text-red-500"/>} />
              <TechBadge name="Agile"/>
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

          {/* LEFT: รูป */}
          <div className="relative">
            <img
              src="/Picture/project3.png"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT: ข้อมูล */}
          <div>

            <h3 className="text-2xl font-bold">
              Project Management Platform with AI Meeting Summarization
            </h3>

            <p className="text-gray-400 mt-2">
              Developed a project management system inspired by Jira, tailored for academic use,
              with an AI-powered feature that summarizes meeting discussions from recorded audio
              into structured text for easier project tracking.
            </p>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Designed and developed a project management system for tracking tasks and team collaboration</li>
              <li>• Implemented audio-to-text processing for meeting recordings using speech recognition</li>
              <li>• Integrated AI summarization to convert meeting transcripts into concise written reports</li>
              <li>• Built frontend with React and managed data using Firebase</li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              <TechBadge name="React" icon={<FaReact className="text-blue-500"/>}/>
              <TechBadge name="Tailwind CSS" icon={<RiTailwindCssFill className="text-cyan-500"/>} />
              <TechBadge name="TypeScript" icon={<SiTypescript className="text-blue-600"/>} />    
              <TechBadge name="Firebase" icon={<IoLogoFirebase className="text-orange-500"/>} />
              <TechBadge name="Speech-to-Text"/>
              <TechBadge name="Gemini API"/>
            </div>
          </div>

        </div>

      </section>
      <ContactForm />
      

    </main>
  )
}
