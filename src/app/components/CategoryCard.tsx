"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  jobCount: number;
  isHighlighted?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  jobCount,
  isHighlighted = false
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = "flex flex-col items-start gap-8 flex-1 p-8 cursor-pointer transition-all duration-300";
  const cardStyles = isHighlighted
    ? `${baseStyles} bg-[#4640DE] ${isHovered ? "shadow-lg transform -translate-y-1" : ""}`
    : `${baseStyles} border border-[#D6DDEB] bg-white ${isHovered ? "shadow-lg border-[#4640DE] transform -translate-y-1" : ""}`;

  const titleStyles = isHighlighted
    ? "text-white text-2xl font-semibold leading-[28.8px] transition-colors duration-300"
    : `text-[#25324B] text-2xl font-semibold leading-[28.8px] transition-colors duration-300 ${isHovered ? "text-[#4640DE]" : ""}`;

  const countStyles = isHighlighted
    ? "text-white text-lg font-normal leading-[28.8px]"
    : "text-[#7C8493] text-lg font-normal leading-[28.8px]";
    
  const iconContainerStyles = `w-[48px] h-[48px] transition-transform duration-300 ${isHovered ? "transform scale-110" : ""}`;

  return (
    <article 
      className={cardStyles} 
      onClick={() => router.push("/form/"+title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={iconContainerStyles}>{icon}</div>
      <div className="flex flex-col justify-center items-start gap-3">
        <h3 className={titleStyles}>{title}</h3>
        <div className="flex items-center gap-4">
          <p className={countStyles}>{jobCount} jobs available</p>
          <div className={`transition-transform duration-300 ${isHovered ? "transform translate-x-1" : ""}`}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.75 12.2256L4.75 12.2256"
                stroke={isHighlighted ? "white" : isHovered ? "#4640DE" : "#25324B"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.7002 6.20124L19.7502 12.2252L13.7002 18.2502"
                stroke={isHighlighted ? "white" : isHovered ? "#4640DE" : "#25324B"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};