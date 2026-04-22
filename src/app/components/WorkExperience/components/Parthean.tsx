import React from "react";
import WorkExperience from "../atoms/WorkExperience";
import { ResumeTypes } from "@/app/page";
import { SweExperienceBias } from "../interfaces/sweExperienceBias";

const Parthean: React.FC<SweExperienceBias> = ({ bias = ResumeTypes.FULL }) => {
  const frontendBias: string[] = [
    `Developed a budgeting feature with React and D3.js to
        visualize financial data, improving user experience by 
        developing new visualizations and reducing load times by 80%`,
    `Engineered a performant drag-and-drop task management system using 
        React and dnd-kit. Improved usability through optimistic loading and 
        seamless UI-backend synchronization`,
  ];

  const PAYMENTS_INFRASTRUCTURE_HIGHLIGHT: string = `Contributed to the 
    development and deployment of a scalable, high-availability payments 
    infrastructure using Go and GCP, supporting ~$3M ARR across 450 customers`;

  const NOTIFICATIONS_INFRASTRUCTURE_HIGHLIGHT: string = `Built scalable, fault-tolerant notification system using Go, GCP, 
    and Apple Push Notification Service, enabling reliable delivery of thousands 
    of concurrent push notifications across clients`;

  const backendBias: string[] = [
    NOTIFICATIONS_INFRASTRUCTURE_HIGHLIGHT,
    PAYMENTS_INFRASTRUCTURE_HIGHLIGHT,
  ];

  const fullstackBias: string[] = [
    NOTIFICATIONS_INFRASTRUCTURE_HIGHLIGHT,
    ...frontendBias,
  ];

  // Shared between all of the resumes, regardless of front/backend/full
  let highlightedExperiences: string[] = [
    `Owned end-to-end feature development from product scoping through 
        deployment and iteration, partnering directly with the Head of Product 
        to ship features in rapid one-week cycles`,
    // `Led front-end code quality initiatives by establishing component
    //     isolation best practices with React and CSS, improving reusability and
    //     maintainability across a growing codebase`,
  ];
  switch (bias) {
    case ResumeTypes.FULL:
      highlightedExperiences = [...highlightedExperiences, ...fullstackBias];
      break;
    case ResumeTypes.FRONTEND:
      highlightedExperiences = [...frontendBias, ...highlightedExperiences];
      break;
    case ResumeTypes.BACKEND:
      highlightedExperiences = [...backendBias, ...highlightedExperiences];
      break;
  }

  return (
    <WorkExperience
      companyName="Parthean"
      startMonth="Sept."
      startYear="2023"
      endMonth="Nov."
      endYear="2024"
      roleName="Founding Software Engineer"
      location="New York, NY"
      highlights={highlightedExperiences}
    />
  );
};

export default Parthean;
