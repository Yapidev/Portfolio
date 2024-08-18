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
  SiLivewire,
  SiAlpinedotjs,
  SiLaragon,
  SiBootstrap,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "Laravel",
      Icon: SiLaravel,
    },
    {
      text: "Alpine.js",
      Icon: SiAlpinedotjs,
    },
    {
      text: "Livewire",
      Icon: SiLivewire,
    },
    {
      text: "Laragon",
      Icon: SiLaragon,
    },
    {
      text: "Boostrap",
      Icon: SiBootstrap,
    },
    {
      text: "Tailwindcss",
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
