import Logo from "./logo"
import SidebarRoutes from "./sidebar-routes"


const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white">
        <div className="p-6">
            <Logo />
        </div>
        {/* sidebar Routes */}
        <div className="flex flex-col w-full">
            <SidebarRoutes />
        </div>
    </div>
  )
}

export default Sidebar