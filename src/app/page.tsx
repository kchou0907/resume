'use client'

import { useState } from "react";
import FullstackResume from "./resumes/Fullstack";
import ResumeSwitcher from "./components/atoms/ResumeSwitcher";
import FrontendResume from "./resumes/Frontend";
import BackendResume from "./resumes/Backend";

const ResumeTypes = Object.freeze({
  FULL: "full",
  FRONTEND: "frontend",
  BACKEND: "backend",
  // PM: "product manager",
} as const);

type ResumeType = typeof ResumeTypes[keyof typeof ResumeTypes];

export { ResumeTypes };
export type { ResumeType };

export default function Home() {

  const [openedResume, setOpenedResume] = useState<ResumeType>(ResumeTypes.FULL);

  let displayedResume = <FullstackResume />
  switch (openedResume) {
    case ResumeTypes.FULL:
      displayedResume = <FullstackResume />;
      break;
    case ResumeTypes.FRONTEND:
      displayedResume = <FrontendResume />;
      break;
    case ResumeTypes.BACKEND:
      displayedResume = <BackendResume />;
      break;
    // case ResumeTypes.PM:
    //   break;
  }
  return (
    <div>
      <ResumeSwitcher
        openedResume={openedResume}
        setOpenedResume={setOpenedResume}
      />
      {displayedResume}
    </div>
  );
}
