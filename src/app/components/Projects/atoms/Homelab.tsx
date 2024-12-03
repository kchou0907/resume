import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const Homelab: React.FC = () => {
    const highlights: string[] = [
        `Engineered a self-hosted web app and data pipelines to securely 
        migrate and manage personal finance data`,
        `Automated data ingestion pipelines using Google Apps Script 
        (Javascript) and Pandas (Python)`,
        `Deployed a Linux-based web server with Nginx and Docker, implementing 
        features like dynamic DNS, reverse proxy, and auto-renewing SSL 
        certificates to support an open-source financial web app`
    ]
    return (
        <ExtracurricularExperience
            activityName="Homelab"
            roleName="Personal Project"
            startMonth="Dec."
            startYear="2022"
            endMonth="May."
            endYear="2023"
            highlights={highlights}
        />
    )
}

export default Homelab