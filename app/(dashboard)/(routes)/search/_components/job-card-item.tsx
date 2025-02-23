"use client";

import { Company, Job } from "@prisma/client";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Box from "@/components/box";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BookmarkCheck,
  BriefcaseBusiness,
  Currency,
  Layers,
  Loader2,
  Network,
} from "lucide-react";
import { cn, formattedString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { truncate } from "lodash";

interface JobCardItemProps {
  job: Job;
  userId: string | null;
}

const JobCardItem = ({ job, userId }: JobCardItemProps) => {
  const typeJob = job as Job & {
    company: Company | null;
  };

  const company = typeJob.company;

  const [isBookmarkLoading, setIsBookmarkLoading] = useState(false);
  const SavedUserIcon = BookmarkCheck;

  return (
    <motion.div layout>
      <Card>
        <div className="w-full h-full p-4 flex flex-col items-start justify-start gap-y-4">
          <Box>
            <p>
              {formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })}
            </p>

            <Button variant={"ghost"} size={"icon"}>
              {isBookmarkLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <SavedUserIcon className={cn("w-4 h-4")} />
              )}
            </Button>
          </Box>

          <Box className="items-center justify-start gap-x-4">
            <div className="w-12 h-12 min-w-12 min-h-12 border p-2 rounded-md relative flex items-center justify-center overflow-hidden">
              {company?.logo && (
                <Image
                  alt={company?.name}
                  src={company?.logo}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              )}
            </div>
            <div className="w-full">
              <p className="text-stone-700 font-semibold text-base w-full">
                {job.title}
              </p>
              <Link
                href={"/company/${company?.id}"}
                className="text-xs text-blue-500 w-full truncate"
              >
                {company?.name}
              </Link>
            </div>
          </Box>

          {/* job details */}

          <Box>
            {job.shiftTiming && (
              <div className=" text-xs text-muted-foreground flex items-center">
                <BriefcaseBusiness className="h-3 w-3 mr-1 " />
                {formattedString(job.shiftTiming)}
              </div>
            )}

            {job.workMode && (
              <div className=" text-xs text-muted-foreground flex items-center">
                <Layers className="h-3 w-3 mr-1 " />
                {formattedString(job.workMode)}
              </div>
            )}
            {job.yearOfExperience && (
              <div className=" text-xs text-muted-foreground flex items-center">
                <Network className="h-3 w-3 mr-1 " />
                {formattedString(job.yearOfExperience)}
              </div>
            )}
            {job.hourlyRate && (
              <div className=" text-xs text-muted-foreground flex items-center">
                <Currency className="h-3 w-3 mr-1 " />
                {`${formattedString(job.hourlyRate)} ₹/hr`}
              </div>
            )}
          </Box>

          {job.short_description && (
            <CardDescription className="text-xs ">
              {truncate(job.short_description, {
                length: 180,
                omission: "...",
              })}
            </CardDescription>
          )}

          {job.tags?.length > 0 && (
            <Box className="flex flex-wrap gap-2">
              {job.tags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </Box>
          )}

          <Box className="gap-2 mt-auto">
            <Link href={`/search/${job.id}`} className="w-full">
              <Button
                variant={"outline"}
                className="w-full border-blue-500 text-blue-500 hover:bg-transparent hover:text-blue-600"
              >
                Details
              </Button>
            </Link>
            <Button
              variant={"outline"}
              className="w-full text-white hover:bg-blue-800 bg-blue-800/90"
            >
              Save
            </Button>
          </Box>
        </div>
      </Card>
    </motion.div>
  );
};

export default JobCardItem;
