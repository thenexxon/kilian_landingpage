"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { cn } from "@/utils/cn";

interface CounterProps {
  targetDate: string | Date;
  className?: string;
  itemClassName?: string;
  numberClassName?: string;
  labelClassName?: string;
  labels?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Counter({
  targetDate,
  className,
  itemClassName,
  numberClassName,
  labelClassName,
  labels = {
    days: "tage",
    hours: "stunden",
    minutes: "minuten",
    seconds: "sekunden",
  },
}: CounterProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Check if mobile device
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const updateInterval = isMobile ? 5000 : 1000; // 5 seconds on mobile, 1 second on desktop

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, updateInterval);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className={cn(
        "z-10 flex md:gap-2 flex-wrap justify-center items-center bg-[rgb(54,60,91)] md:bg-transparent py-2 px-6 rounded-md w-[240px] md:w-[600px]",
        className
      )}
    >
      <CounterItem
        number={timeLeft.days}
        label={labels.days}
        className={itemClassName}
        numberClassName={numberClassName}
        labelClassName={labelClassName}
      />
      <div className="mx-2 md:hidden">&#58;</div>
      <CounterItem
        number={timeLeft.hours}
        label={labels.hours}
        className={itemClassName}
        numberClassName={numberClassName}
        labelClassName={labelClassName}
      />
      <div className="mx-2 md:hidden">&#58;</div>
      <CounterItem
        number={timeLeft.minutes}
        label={labels.minutes}
        className={itemClassName}
        numberClassName={numberClassName}
        labelClassName={labelClassName}
      />
      <div className="mx-2 md:hidden">&#58;</div>
      <CounterItem
        number={timeLeft.seconds}
        label={labels.seconds}
        className={itemClassName}
        numberClassName={numberClassName}
        labelClassName={labelClassName}
      />
    </div>
  );
}

interface CounterItemProps {
  number: number;
  label: string;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
}

const CounterItem = memo(function CounterItem({
  number,
  label,
  className,
  numberClassName,
  labelClassName,
}: CounterItemProps) {
  const paddedNumber = number.toString().padStart(2, "0");

  return (
    <div
      className={cn(
        "text-center md:bg-[rgb(54,60,91)] py-2 md:py-4 md:px-6 rounded-md md:w-[120px] flex md:block will-change-contents",
        className
      )}
      style={{ willChange: 'contents' }}
    >
      <span
        className={cn(
          "text-2xl font-bold w-[32px] block md:w-full md:text-5xl text-center transition-all duration-300",
          numberClassName
        )}
        style={{ willChange: 'contents' }}
      >
        {paddedNumber}
      </span>
      <span className={cn("uppercase text-xs md:block hidden", labelClassName)}>
        {label}
      </span>
    </div>
  );
});

export default Counter;
