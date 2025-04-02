import { JobTags } from "./JobTags";

interface JobCardProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: Array<{
    label: string;
    type: "marketing" | "design" | "business" | "technology";
  }>;
}

export const JobCard = ({
  logo,
  title,
  company,
  location,
  description,
  tags,
}: JobCardProps) => {
  const isImage = logo.includes("<img") || logo.includes("http");

  return (
    <div className="flex flex-col gap-5 border border-solid border-[#D6DDEB] rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#4640DE] group cursor-pointer">
      <div className="flex justify-between items-center w-full">
        {isImage ? (
          <img
            src={logo.replace(/<img>|<\/img>/g, "").replace(/"/g, "")}
            alt={`${company} logo`}
            className="w-12 h-12 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div 
            dangerouslySetInnerHTML={{ __html: logo }} 
            className="w-12 h-12 transform group-hover:scale-105 transition-transform duration-300" 
          />
        )}
        <div className="text-[#4640DE] text-sm font-medium border border-[#4640DE] rounded px-3 py-1 hover:bg-[#4640DE] hover:text-white transition-colors duration-300">
          Full Time
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-[#25324B] text-lg font-bold group-hover:text-[#4640DE] transition-colors duration-300">{title}</h3>
        <div className="flex items-center gap-2 text-[#515B6F] text-sm">
          <span className="group-hover:text-[#25324B] transition-colors duration-300">{company}</span>
          <span className="w-1 h-1 bg-[#515B6F] opacity-30 rounded-full" />
          <span>{location}</span>
        </div>
        <p className="text-[#7C8493] text-sm line-clamp-2 group-hover:text-[#515B6F] transition-colors duration-300">{description}</p>
        <JobTags tags={tags} />
      </div>
      <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-300 flex items-center justify-end">
        <span className="text-[#4640DE] text-sm font-medium flex items-center gap-1">
          View details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M19.75 11.7256L4.75 11.7256" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};