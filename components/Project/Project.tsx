"use client"

import TechBadge from "../TechBadge"
import { FaCircleDot } from "react-icons/fa6";
import { FaReact} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase,} from "react-icons/io5";
import { SiFirebase, SiTypescript } from "react-icons/si";

export default function Project() {
    return (
        <>
            <h2 className="text-2xl font-semibold">Projects</h2>

            <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
                <div className="relative">
                    <img
                        src="/Picture/Project1.png"
                        className="rounded-xl shadow-lg"
                    />
                </div>

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

                    <div className="flex flex-wrap gap-2 mt-4">
                        <TechBadge name="Outsystems" icon={<FaCircleDot className="text-red-500"/>} />
                        <TechBadge name="Workflow Design"/>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

                
                <div className="relative">
                    <img
                        src="/Picture/Project2.png"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                
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

                    
                    <div className="flex flex-wrap gap-2 mt-4">
                        <TechBadge name="Outsystems" icon={<FaCircleDot className="text-red-500"/>} />
                        <TechBadge name="Agile"/>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

                <div className="relative">
                    <img
                        src="/Picture/Project3.png"
                        className="rounded-xl shadow-lg"
                    />
                </div>
                
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

                    <div className="flex flex-wrap gap-2 mt-4">
                        <TechBadge name="React" icon={<FaReact className="text-blue-500"/>}/>
                        <TechBadge name="Tailwind CSS" icon={<RiTailwindCssFill className="text-cyan-500"/>} />
                        <TechBadge name="TypeScript" icon={<SiTypescript className="text-blue-600"/>} />    
                        <TechBadge name="Firebase" icon={<SiFirebase className="text-orange-500"/>} />
                        <TechBadge name="Speech-to-Text"/>
                        <TechBadge name="Gemini API"/>
                    </div>
                </div>
            </div>
        </>
    )
}