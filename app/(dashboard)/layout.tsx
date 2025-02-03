import React from 'react'

function DashBoardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='h-full'>
        {/* Header */}
           <header className=''>
            Header
            </header> 
        {/* sidebar */}
        <div>
            SideBar
        </div>

        <main>
            {children}
        </main>
    </div>
  )
}

export default DashBoardLayout