import React from "react";
import WorkExperience from "../atoms/WorkExperience";
import { ResumeTypes } from "@/app/page";
import { SweExperienceBias } from "../interfaces/sweExperienceBias";

const Parthean: React.FC<SweExperienceBias> = ({ bias = ResumeTypes.FULL }) => {

    const frontendBias: string[] = [
        `Designed and deployed a budgeting feature with React and D3.js, 
        integrating financial data into dynamic, interactive 
        visualizations. Rewrote Redux retrieval logic for responsive 
        charts, reducing load times by 80%`,
        `Engineered a performant drag-and-drop task management system using 
        React and dnd-kit. Implemented optimistic loading and error reversion 
        to solve state synchronization challenges between the UI and backend`
    ]

    const PAYMENTS_INFRASTRUCTURE_HIGHLIGHT: string = `Contributed to the 
    development and deployment of a scalable, high-availability payments 
    infrastructure using Go and GCP, supporting ~$3M ARR across 450 customers`;

    const backendBias: string[] = [
        `Designed and implemented a scalable, fault-tolerant notification 
        system leveraging Go, GCP, and Apple's Push Notification Service, 
        capable of processing thousands of concurrent notification requests 
        with high reliability`,
        PAYMENTS_INFRASTRUCTURE_HIGHLIGHT,
    ]

    const fullstackBias: string[] = [
        `Designed and deployed a budgeting feature with React and D3.js, 
        integrating financial data into dynamic, interactive 
        visualizations. Rewrote Redux retrieval logic for responsive 
        charts, reducing load times by 80%`,
        PAYMENTS_INFRASTRUCTURE_HIGHLIGHT,
    ]

    let highlightedExperiences: string[] = [
        `Owned the full lifecycle of feature development. Partnered with the 
        Head of Product to deliver features in rapid, one-week iteration cycles,
        driving user adoption and satisfaction`,
        `Led front-end code quality initiatives by establishing component 
        isolation best practices with React and CSS, improving reusability and 
        maintainability across a growing codebase`,
    ];
    switch (bias) {
        case ResumeTypes.FULL:
            highlightedExperiences = [
                ...highlightedExperiences,
                ...fullstackBias
            ]
            break;
        case ResumeTypes.FRONTEND:
            highlightedExperiences = [
                ...highlightedExperiences,
                ...frontendBias
            ]
            break;
        case ResumeTypes.BACKEND:
            highlightedExperiences = [
                ...highlightedExperiences,
                ...backendBias
            ]
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
    )
}

export default Parthean;