"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Jquery",
      Icon: SiJquery,
    },
    {
      text: "PHP",
      Icon: SiPhp,
    },
    {
      text: "Laravel",
      Icon: SiLaravel,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
  ];

  return (
    <div className="animate-move-up">
      <Title
        text="Skills 🎯"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
