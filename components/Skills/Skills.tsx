"use client"
import { FaReact,FaNodeJs,FaHtml5,FaGitAlt} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoJavascript, IoLogoVercel,} from "react-icons/io5";
import { SiFirebase, SiTypescript } from "react-icons/si";
import TechBadge from "@/components/TechBadge"
import { PiFileSqlFill } from "react-icons/pi";
import { FaCircleDot } from "react-icons/fa6";

export default function Skills() {
    return (
        
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
              <TechBadge name="Firebase" icon={<SiFirebase className="text-orange-500"/>} />
              <TechBadge name="SQL" icon={<PiFileSqlFill className="text-blue-500"/>} />
              <TechBadge name="Outsystems" icon={<FaCircleDot className="text-red-500"/>} />
            </div>        
          </div>
        </div>
    )
}