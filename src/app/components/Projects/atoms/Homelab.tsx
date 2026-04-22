import React from "react";
import ExtracurricularExperience from "../../atoms/ExtracurricularExperience";

const Homelab: React.FC = () => {
  const highlights: string[] = [
    `Built and maintained a self-hosted Linux server for deploying 
    containerized applications and personal services`,
    `Deployed multiple Dockerized services including WireGuard VPN, Pi-hole DNS 
    filtering, and Unbound recursive DNS`,
    `Hosted and deployed personal web applications (including a restaurant 
    randomizer) behind an Nginx proxy`,
    `Implemented dynamic DNS, automated SSL certificate renewal, and 
    containerized service management using Docker and Cloudflare`,
  ];
  return (
    <ExtracurricularExperience
      activityName="Homelab"
      roleName="Personal Project"
      startMonth="Dec."
      startYear="2022"
      endMonth="Present"
      endYear=""
      highlights={highlights}
    />
  );
};

export default Homelab;
