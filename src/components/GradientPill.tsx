import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface GradientPillProps {
  text: string;
  icon?: string;
  iconAlt?: string;
  className?: string;
}

export function GradientPill({
  text,
  icon,
  iconAlt = "icon",
  className,
}: GradientPillProps) {
  return (
    <div className={cn("relative inline-flex", className)}>
      {/* Gradient border using pseudo-element */}
      <div
        className="absolute inset-0 rounded-full p-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, #2E4CEB 70%, #86FFFF 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />
      {/* Content */}
      <div className="relative flex items-center py-4 px-8">
        <div className="flex items-center">
          {icon && <Image src={icon} width={24} height={24} alt={iconAlt} style={{ width: "auto", height: "auto" }} />}
          <span className={cn("text-white text-xs font-sm", icon && "ml-4")}>
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
