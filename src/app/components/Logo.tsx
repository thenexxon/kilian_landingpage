import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        className,
        "fixed top-0 w-full p-6 text-center left-0 right-0"
      )}
    >
      <Image
        src={"/logo.png"}
        width={300}
        height={100}
        className="w-[250px] inline"
        alt="Krypto Masterclass logo"
      />
    </div>
  );
}

export default Logo;
