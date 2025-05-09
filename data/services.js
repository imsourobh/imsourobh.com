const { FaServer } = require("react-icons/fa");
const {
  IoLogoNodejs,
  IoLogoFirebase,
  IoSearchSharp,
} = require("react-icons/io5");
const { RiNextjsFill } = require("react-icons/ri");
const { TfiServer } = require("react-icons/tfi");


import { RiShieldCheckLine, RiSpyLine, RiBugLine, RiLockLine, RiServerLine, RiFileWarningLine } from "react-icons/ri";

export const services = [
  {
    name: "Penetration Testing",
    description:
      "Conduct thorough penetration testing to identify vulnerabilities in your systems, networks, and applications using tools like Metasploit, Burp Suite, and Nmap.",
    icon: (
      <RiBugLine
        className="text-[4em] text-button"
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Threat Analysis",
    description:
      "Analyze and monitor network traffic for potential threats using tools like Wireshark and Splunk, providing actionable insights to mitigate risks.",
    icon: (
      <RiSpyLine
        className="text-[4em] text-button"
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Security Auditing",
    description:
      "Perform comprehensive security audits to ensure compliance with standards like OWASP, identifying and addressing security gaps in your infrastructure.",
    icon: (
      <RiShieldCheckLine
        className="text-[4em] text-button"
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Incident Response",
    description:
      "Provide rapid incident response services to investigate, contain, and remediate security breaches, minimizing damage and downtime.",
    icon: (
      <RiFileWarningLine
        className="text-[4em] text-button"
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Network Security",
    description:
      "Design and implement robust network security measures, including firewall configuration, intrusion detection with Snort, and secure VPN setups.",
    icon: (
      <RiServerLine
        className="text-[4em] text-button"
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Secure Development Consulting",
    description:
      "Offer guidance on secure coding practices, vulnerability assessments, and encryption techniques to ensure your applications are secure from the ground up.",
    icon: (
      <RiLockLine
        className="text-[4em] text-button"
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
];