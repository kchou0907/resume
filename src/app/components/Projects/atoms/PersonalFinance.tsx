import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const PersonalFinance: React.FC = () => {
    const highlights: string[] = [
        `Self-hosted web app and data pipelines to migrate my financial data off
        of 3rd party services`,
        `Created data pipelines from Google Sheets using Google Apps Script 
        (Javascript) and Pandas (Python)`,
        `Created a self-hosted Linux web server using Nginx and Docker. 
        Implemented synamic DNS, reverse proxy, auto-renewing SSL certificate, 
        and an open-sourced finance web application`
    ]
    return (
        <ExtracurricularExperience
            activityName="Personal Finance"
            roleName="Personal Project"
            startMonth="Dec."
            startYear="2022"
            endMonth="May."
            endYear="2023"
            highlights={highlights}
        />
    )
}

export default PersonalFinance