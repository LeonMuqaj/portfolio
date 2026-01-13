"use client";

import { useEffect } from "react";
import { useActiveSection, SectionName } from "../utils/ActiveSectionContext";

interface UseScrollSpyOptions {
  sectionIds: SectionName[];
  offset?: number;
  throttleMs?: number;
}

export function useScrollSpy({
  sectionIds,
  offset = 100,
  throttleMs = 100,
}: UseScrollSpyOptions) {
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    let lastScrollTime = 0;

    const handleScroll = () => {
      const now = Date.now();
      
      if (now - lastScrollTime < throttleMs) return;
      lastScrollTime = now;

      if (now - timeOfLastClick < 1000) return;

      const scrollY = window.scrollY;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + scrollY - offset;
          
          if (scrollY >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset, throttleMs, setActiveSection, timeOfLastClick]);
}
