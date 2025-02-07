import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  return (
    <div className='p-6 '>
      <div className='flex items-end justify-end'>
        <Link href={"/admin/create"}>
          <Button>
            <Plus className='h-5 w-5 mr-2'/>
             New Job
          </Button>
        </Link>
      </div>

      {/* DataTable - List of Jobs */}
    </div>
  )
}

export default page