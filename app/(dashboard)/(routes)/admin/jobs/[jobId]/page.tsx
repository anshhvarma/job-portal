import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import JobPublishAction from "./_components/job-publish-action";
import { Banner } from "@/components/banner";

const JobDetailsPage = async (
    {params} : {params: {jobId: string}}
) => {

  // Validate job id from mongo db
  const validObjectIdRegex = /^[0-9a-fA-F]{24}$/;
  if(!validObjectIdRegex.test(params.jobId)){
    return redirect('/admin/jobs');
  }

  const { userId } = await auth();

  if (!userId) {
    return redirect('/');
  }

  const job = await db.job.findUnique({
    where: {
      id: params.jobId,
      userId,
    } 
  });

  if (!job) {
    return redirect('/admin/jobs');
  }

  const requiredFields = [
    job.title,
    job.description,
    job.imageUrl
]

const totalFields = requiredFields.length;
const completedFields = requiredFields.filter(Boolean).length;
const completionText = `(${completedFields}/${totalFields})`;

const isComplete = requiredFields.every(Boolean)

  return (
    <div className="p-6">
      <Link href={'/admin/jobs'}>
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          <ArrowLeft className="w-4 h-4"/>
          Back
        </div>
      </Link>

      <div className="flex items-center justify-between my-4">
        <div className="flex flex-col gap-y-2"> 
          <h1 className="text-2xl font-medium"> Job Setup</h1>
          <span className="text-sm text-neutral-500"> Complete All Fields 
            {completionText}
          </span>
        </div>
        {/* Action Button */}
        <JobPublishAction 
        jobId={params.jobId}
        isPublished={job.isPublished}
        disable={!isComplete}
        /> 
      </div>


      {/* warnig */}
      {!job.isPublished && (
        <Banner 
        variant={"warning"}
        label="This job is unPublished. It will not be visible in the jobs lists"
        />
      )}
    </div>
  )
}

export default JobDetailsPage