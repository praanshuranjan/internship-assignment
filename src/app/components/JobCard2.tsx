import { TagList, Tag } from "./TagList";

interface JobCardProps {
  companyLogo: string;
  title: string;
  company: string;
  location: string;
  tags: Tag[];
}

export const JobCard = ({
  companyLogo,
  title,
  company,
  location,
  tags,
}: JobCardProps) => {
  return (
    <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-transparent hover:border-gray-200">
      <div>
        <div dangerouslySetInnerHTML={{ __html: companyLogo }} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[#25324B] text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">{title}</div>
        <div className="text-[#515B6F] text-base">
          {company} • {location}
        </div>
        <TagList tags={tags} />
      </div>
    </div>
  );
};