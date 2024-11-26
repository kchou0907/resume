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
                        Languages: Java, Python, Javascript, SQL, Hack/PHP, R, Go
                    </li>
                    <li className={globalResumeStyles.listItem}>
                        Frameworks: Bootstrap, JQuery, Express.js, Node.js, Mongoose, Shiny, Dplyr, Ggplot2
                    </li>
                    <li className={globalResumeStyles.listItem}>
                        Tools: Kubernetes, Firebase, Docker, Git, AWS, Digital Ocean, Terraform, Ansible
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SkillSummary