"use client"
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa"

export default function ContactForm() {
  return (
    <footer style={{backgroundColor: '#fcdee2'}} className="-mx-8 -mb-20">
      <div className="flex flex-col items-center px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-500">Contact Me</h2>
        <div className="flex gap-6">       
            <div className="flex flex-col mt-6">
                <ul className="">   
                    <li className="mb-3 flex items-center gap-2">
                        <a href="https://www.linkedin.com/in/chapakorn-srisakwichai-074a793b7" className="flex items-center gap-2 hover:text-gray-500 transition">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-white rounded-full">                           
                                <FaLinkedin className="text-3xl text-blue-600" />
                            </span>
                            <span className="text-sm">
                                Chapakorn Sisakwichai
                            </span>
                        </a>
                        <span className="text-gray-500 text-sm">
                            (Recommended)
                        </span>
                    </li>
                    <li className="mb-3 flex items-center gap-2">
                        <a href="https://www.facebook.com/share/1DrxwtqrCb/?mibextid=wwXIfr" className="flex items-center gap-2 hover:text-gray-500 transition">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-white rounded-full">
                                <FaFacebook className="text-3xl text-blue-600"/>
                            </span>
                            <span className="text-sm">
                                Chapakorn First
                            </span>
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <a href="#" className="flex items-center gap-2 hover:text-gray-500 transition">
                            <span className="inline-flex items-center justify-center w-6 h-6">
                                <FaInstagram className="text-3xl text-white"/>
                            </span>
                            <span className="text-sm">
                                Chapakorns
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col mt-6">
                <ul>
                    <li className="text-gray-600">
                        <span className="text-black mr-2">
                            Email: Chapakornfirst@gmail.com
                        </span>
                        <span className="text-gray-500 text-sm">
                            (Recommended)
                        </span>
                    </li>
                    <li className="text-gray-600">
                        <span className="text-black mr-2">
                            Phone: 096-571-4752
                        </span>
                        <span className="text-gray-500 text-sm">
                            (Recommended)
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        {/* ใส่ฟอร์มติดต่อที่นี่ */}
      </div>
    </footer>
  )
}