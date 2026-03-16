import React from "react"
import globalResumeStyles from "../../styles/Resume.module.css"
import SectionTitle from "../atoms/SectionTitle"

const SkillSummary: React.FC = () => {
    return (
        <div>
            <div className={globalResumeStyles.section}>
                <SectionTitle title="Skill Summary"/>
                <ul>
                    <li className={globalResumeStyles.listItem}>
                        Languages: Java, Javascript, Go, SQL, Python, Hack/PHP
                    </li>
                    <li className={globalResumeStyles.listItem}>
                        Frameworks: React, JQuery, Express.js, Node.js, Mongoose
                    </li>
                    <li className={globalResumeStyles.listItem}>
                        Tools: Kubernetes, Firebase, Docker, Git, GCP, AWS, Digital Ocean, Terraform, Ansible
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SkillSummary