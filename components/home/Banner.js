"use client";

import { FaUserNinja } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

import { motion, stagger, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { FlipWords } from "../ui/flip-words";
import { IconCloud } from "../ui/IconCloud";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TimelineContent } from "../ui/TimeLineContent";
import TextShimmerButton from "./TextShimmerButton";

export default function Banner() {
  const words = [
    "Cyber Security Enthusiast",
    "Open Source Contributor",
    "Bug Bounty Hunter",
    "Photographer",
    "Web3 Developer",
  ];

  const paraWords = `I'm a passionate cyber security analysist with a strong background in computer networking and system administration, cryptography and web3. I have a Bachelor of Science in Electric and Electronic Engineering at SUST. I have a strong passion for cyber security and have been working in this field for the past 3 years. I have
  experience in penetration testing, vulnerability assessment, and incident response. I am also proficient in programming languages such as Python, C, and Javascript.`;

  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 5.5 });


  const bannerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, scale: 1, x: 1 },
      {
        duration: 0.2,
        delay: staggerList,
      }
    );
  }, [staggerList, animate]);

  return (
    <div
      className=" my-0 sm:my-2 lg:my-16 px-0 grid grid-cols-1 lg:grid-cols-1 overflow-hidden text-center md:text-right"
      ref={bannerRef}
    >
      <TimelineContent
        animationNum={1}
        timelineRef={bannerRef}
        x={-40}
        style={"lg:col-span-2 order-2 lg:order-1"}
      >
        <div className=" ">
          <motion.h2
            className="text-text-primary text-3xl font-semibold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Hi, I&apos;m{" "}
          </motion.h2>
          <motion.h1
            className="  text-[35px] sm:text-[45px] md:text-[55px] lg:text-[60px] font-semibold "
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <span className="bg-clip-text  text-transparent bg-gradient-to-r  to-[#1cc8ff]   from-[#583cea] ">
              Soumik Das 
            </span>{" "}
            <br />
          </motion.h1>

          {/* type data  */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FlipWords
              words={words}
              className={
                "bg-clip-text inline-block overflow-hidden text-wrap text-[2em] sm:text-[3em] text-text-secondary font-medium"
              }
            />
          </motion.div>

          <motion.h2
            className="  text-[2em] sm:text-[3em] font-semibold "
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <span className="text-text-secondary">
              I don&apos;t just find bugs, I create them too!
            </span>
          </motion.h2>
    </div>
    <div
      className=" my-0 sm:my-2 lg:my-16 px-0 grid grid-cols-1 lg:grid-cols-1 overflow-hidden text-center md:text-left"
      ref={bannerRef}
    >              
          <motion.div
            className="lg:w-2/3 pt-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <TextGenerateEffect
              words={paraWords}
              className={"text-[#666687] text-[17px] sm:text-lg"}
              duration={0.01}
            />
          </motion.div>

          <ul
            className="resume flex gap-4 items-center pt-8 pb-4"
            // initial={{ opacity: 0, x: -30 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5, delay: 5.5 }}
            ref={scope}
          >
            <motion.li style={{ opacity: 0, scale: 0.3, x: -50 }}>
            </motion.li>
          </ul>
        </div>
      </TimelineContent>
      <TimelineContent
        animationNum={0}
        timelineRef={bannerRef}
        x={60}
        style={"w-full lg:w-full  lg:col-span-1 order-1 lg:order-2 relative"}
      >
        
      </TimelineContent>
    </div>
  );
}
