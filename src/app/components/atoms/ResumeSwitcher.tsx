import { ResumeType, ResumeTypes } from "@/app/page";
import React from "react";

type ResumeSwitcherProps = {
    openedResume: string;
    setOpenedResume: (resumeType: ResumeType) => void;
};

const ResumeSwitcher: React.FC<ResumeSwitcherProps> = ({ openedResume, setOpenedResume }) => {
    const buttons = Object.keys(ResumeTypes).map((type, index) => {
        const val = ResumeTypes[type as keyof typeof ResumeTypes];
        const selected = openedResume === val;
        return (
            <span
                onClick={() => setOpenedResume(val)}
                key={`resume-type-${index}`}
                style={{
                    cursor: "pointer",
                    color: selected ? "red" : "white"
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