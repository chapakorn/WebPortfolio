"use client"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function AboutMe() {
    return (
        <>
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
                                repeat={Infinity} />
                        </span>
                    </p>

                    <ul className="flex gap-4 mt-4 text-4xl">
                        <li>
                            <a href="https://github.com/chapakorn" className="hover:text-gray-500 transition">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/chapakorn-srisakwichai-074a793b7" className="hover:text-blue-600 transition">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="flex-1 flex justify-center">
                    <Image
                        src="/Picture/pro.jpg"
                        width={300}
                        height={300}
                        alt="profile"
                        className="w-72 h-72 object-cover rounded-full" />
                </div>
            
            </div>
            <div className="mt-20">                 
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
            </div>
        </>
    )
}