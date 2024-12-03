import { ResumeType, ResumeTypes } from "@/app/page";
import React from "react";

type ResumeSwitcherProps = {
    setOpenedResume: (resumeType: ResumeType) => void; // Define the type for the function
};

const ResumeSwitcher: React.FC<ResumeSwitcherProps> = ({ setOpenedResume }) => {
    const buttons = Object.keys(ResumeTypes).map((type, index) => {
        const val = ResumeTypes[type as keyof typeof ResumeTypes];
        return (
            <span
                onClick={() => setOpenedResume(val)}
                key={`resume-type-${index}`}
                style={{
                    cursor: "pointer"
                }}
            >
                {type}
            </span>
        )
    })
    return (
        <div className={"resumeSwitcher"}
            style={{
                display: "flex",
                gap: 16
            }}
        >
            {buttons}
        </div>
    )
}

export default ResumeSwitcher