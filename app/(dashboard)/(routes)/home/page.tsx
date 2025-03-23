import { getJobs } from '@/actions/get-jobs';
import Box from '@/components/box';
import { HomeSearchContainer } from '@/components/home-search-components';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const homeDashboard = async () => {

    const {userId} = await auth();
    const jobs = await getJobs({})

    const categories = await db.category.findMany({
        orderBy: { name: "asc" },
    });

    const companies = await db.company.findMany({
        orderBy: { createdAt : "desc" },
    });

  return (
    <div className='flex-col py-6 px-4 space-y-24'> 
        <Box className='flex-col justify-center w-full space-y-4 mt-12'>
            <h2 className='text-2xl md:text-4xl font-bold tracking-wide text-neutral-600'>
                Find Your Dream Job
            </h2>

            <p className='text-2xl text-muted-foreground'>
                {jobs.length} + jobs for you to Explore
            </p>
        </Box>

        <HomeSearchContainer />

    </div>
  )
}

export default homeDashboard