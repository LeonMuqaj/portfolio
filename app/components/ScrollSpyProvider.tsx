"use client";

import { useScrollSpy } from "../hooks/useScrollSpy";

export default function ScrollSpyProvider() {
  useScrollSpy({
    sectionIds: ["about", "experience", "projects"],
    offset: 150,
  });

  return null;
}
