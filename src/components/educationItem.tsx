import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EducationItem({
  title,
  date,
  description,
  imageUrl,
  link
}: {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}) {
  return (
    <Link
      target="_blank"
      href={link}
      className="flex justify-between items-center w-full group ease-in-out max-md:items-start z-10"
    >
      <div className="flex gap-2 items-center w-full">
        <Image
          src={imageUrl}
          alt={title}
          width={46}
          height={46}
          className="rounded-full object-cover border"
        />
        <div className="flex flex-col text-sm justify-center h-full w-full">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-1">
              {title}
              <ChevronRight className="w-0 group-hover:w-4 transition-all duration-200 ease-in-out" />
            </div>
            <p className="text-sm whitespace-nowrap">{date}</p>
          </div>
          <p className="truncate">{description}</p>
        </div>
      </div>
    </Link>
  );
}
