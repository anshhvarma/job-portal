'use client'

import { Compass, Home, List, User } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import SidebarRouteItems from "./sidebar-route-items"


const adminRoutes = [
    {
        icons : List,
        label : "Jobs",
        href: "/admin/jobs"
    },
    {
        icons : List,
        label : "Companies",
        href: "/admin/companies"
    },
    {
        icons : List,
        label : "Analytics",
        href: "/admin/analytics"
    },
]

const guestRoutes = [
    {
        icons : Home,
        label : "Home",
        href: "/"
    },
    {
        icons : Compass,
        label : "Search",
        href: "/search"
    },
    {
        icons : User,
        label : "Profile",
        href: "/profile"
    },
    {
        icons : User,
        label : "Saved Jobs",
        href: "/savedJobs"
    },
]
const SidebarRoutes = () => {

    const pathname = usePathname();
    const router = useRouter();

    const isAdminPage = pathname?.startsWith("/admin")

    const routes = isAdminPage ? adminRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
       {routes.map((route) => (
        <SidebarRouteItems key={route.href} icon={route.icons} label={route.label} href={route.href}/>
       ))}
    </div>
  )
}

export default SidebarRoutes