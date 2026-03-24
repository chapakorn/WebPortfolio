"use client";

export default function NavigateBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-4 flex justify-center backdrop-blur-sm bg-white/1">
            <div className="top-nav-bar px-6 py-2 flex justify-center items-center shadow-md">
                
                <ul className="flex gap-6 justify-center items-center">
                <li><a href="#about" className="nav-link">About Me</a></li>
                <li><a href="#skills" className="nav-link">My Skills Set</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                
            </div>
        </nav>
    )
}