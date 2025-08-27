"use client";

import React, { useState } from "react";
import Link from "next/link";
import ElectricBorder from "./ElectricBorder";
import { cn } from "@/utils/cn";

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function CTAButton({ text, href, onClick, className }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    boxShadow: "5px 10px 15px 0.45px #FFD5A6BF inset",
    border: "2px solid #FFFFFFA8",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const buttonClasses = cn(
    "py-4 px-6 bg-[linear-gradient(267.16deg,#FFA658_12.32%,#FF7700_109.38%)] rounded-full font-bold block",
    className
  );

  const buttonElement = href ? (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyles}
      className={buttonClasses}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyles}
      className={buttonClasses}
    >
      {text}
    </button>
  );

  return (
    <>
      <style jsx>{`
        @keyframes fireFlicker {
          0% {
            filter: drop-shadow(0 0 8px rgba(255, 166, 88, 0.1))
              drop-shadow(0 0 15px rgba(255, 119, 0, 0.4));
          }
          20% {
            filter: drop-shadow(0 0 3px rgba(255, 119, 0, 0.1))
              drop-shadow(0 0 8px rgba(255, 166, 88, 0.3));
          }
          40% {
            filter: drop-shadow(0 0 12px rgba(255, 166, 88, 0.1))
              drop-shadow(0 0 20px rgba(255, 119, 0, 0.2));
          }
          60% {
            filter: drop-shadow(0 0 5px rgba(255, 119, 0, 0.1))
              drop-shadow(0 0 10px rgba(255, 166, 88, 0.3));
          }
          80% {
            filter: drop-shadow(0 0 10px rgba(255, 166, 88, 0.1))
              drop-shadow(0 0 18px rgba(255, 119, 0, 0.3));
          }
          100% {
            filter: drop-shadow(0 0 8px rgba(255, 166, 88, 0.1))
              drop-shadow(0 0 15px rgba(255, 119, 0, 0.2));
          }
        }
      `}</style>
      <div
        className="inline-block"
        style={{
          animation: isHovered
            ? "fireFlicker 0.5s ease-in-out infinite"
            : "none",
        }}
      >
        <ElectricBorder
          className="rounded-full inline-block"
          color={isHovered ? "#FFA658" : "transparent"}
          speed={isHovered ? 2 : 0}
          chaos={isHovered ? 0.8 : 0}
          thickness={isHovered ? 5 : 0}
          style={{
            borderRadius: 100,
          }}
        >
          {buttonElement}
        </ElectricBorder>
      </div>
    </>
  );
}
