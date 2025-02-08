
const JobDetailsPage = async (
    {params} : {params: {jobId: string}}
) => {
  return (
    <div>JobDetailsPage : {params.jobId}</div>
  )
}

export default JobDetailsPage