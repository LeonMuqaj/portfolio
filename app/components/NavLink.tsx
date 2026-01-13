"use client";

import { useActiveSection, SectionName } from "../utils/ActiveSectionContext";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  const sectionId = href.replace("#", "") as SectionName;
  const isActive = activeSection === sectionId;

  const handleClick = () => {
    setActiveSection(sectionId);
    setTimeOfLastClick(Date.now());
  };

  return (
    <li>
      <a
        className="group flex items-center py-3"
        href={href}
        onClick={handleClick}
      >
        <span
          className={`nav-indicator mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
            isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-500"
          }`}
        />
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
            isActive ? "text-slate-200" : "text-slate-500"
          }`}
        >
          {label}
        </span>
      </a>
    </li>
  );
}
