import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";

export default function Skills() {
  const skills = [
    {
      name: "Wireshark",
      icon: "/icons/wireshark.webp",
    },
    {
      name: "Nmap",
      icon: "/icons/nmap.jpg",
    },
    {
      name: "Metasploit",
      icon: "/icons/metasploit.png",
    },
    {
      name: "Burp Suite",
      icon: "/icons/burpsuite.jpg",
    },
    {
      name: "Kali Linux",
      icon: "/icons/kalilinux.png",
    },
    {
      name: "Python",
      icon: "/icons/python.svg",
    },
    {
      name: "Bash",
      icon: "/icons/bash.png",
    },
    {
      name: "PowerShell",
      icon: "/icons/powershell.jpg",
    },
    {
      name: "Git",
      icon: "/icons/git.svg",
    },
    {
      name: "GitHub",
      icon: "/icons/github.svg",
    },
    {
      name: "Docker",
      icon: "/icons/docker.svg",
    },
    {
      name: "React",
      icon: "/icons/react.svg",
    },
    {
      name: "VS Code",
      icon: "/icons/vscode.svg",
    },
    {
      name: "Node Js",
      icon: "/icons/nodejs.svg",
    },
    {
      name: "HTML",
      icon: "/icons/html.svg",
    },
    {
      name: "OWASP",
      icon: "/icons/owasp.png",
    },
    {
      name: "Express",
      icon: "/icons/express.svg",
    },
    {
      name: "Arduino",
      icon: "/icons/arduino.jpg",
    },
    {
      name: "Cryptography",
      icon: "/icons/cryptography.png",
    },
    {
      name: "John the Ripper",
      icon: "/icons/jhontheripper.png",
    },
  ];

  return (
    <section className="py-10 ">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        Skills
      </h2>
      <div className="pt-4">
        <Marquee
          // gradient={true}
          // gradientColor="#000319"
          speed={100}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
          // className="bg-[#0e082c62]"
        >
          {skills.map((data, index) => {
            return <SkillCard key={index} data={data} index={index} />;
          })}
        </Marquee>
      </div>
    </section>
  );
}
