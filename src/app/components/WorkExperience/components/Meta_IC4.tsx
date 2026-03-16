import React from "react";
import WorkExperience from "../atoms/WorkExperience";

const Meta_IC4: React.FC = () => {
  const highlightedExperiences: string[] = [
    `Led engineering for the Threads youth ads graduation system, launching 
        compliance flows that notify users upon turning 18 of expanded ad data 
        usage; rolled out to 100% of global traffic.`,
    `Onboarded Threads to Meta’s Youth Ads eligibility platform, enforcing 
        age-based ad serving policies; validated rollout correctness through 
        monitoring and metrics analysis to de-risk Threads monetization launches.`,
    `Architected and implemented the EU “Subscription for No Ads” (SNA) 
        graduation flow, integrating Threads with the SNA platform to enable 
        compliant monetization for EU users turning 18; brought system to 
        production launch readiness.`,
  ];

  return (
    <WorkExperience
      companyName="Meta"
      startMonth="June."
      startYear="2025"
      isCurrentPosition={true}
      roleName="Software Engineer"
      location="Menlo Park, CA"
      highlights={highlightedExperiences}
    />
  );
};

export default Meta_IC4;
