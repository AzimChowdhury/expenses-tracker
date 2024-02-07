import Sidebar from "@/components/Sidebar";
import './dashboardLayout.css'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className="dashboard w-screen h-screen bg-[#32A7E2] p-7 flex">
            <Sidebar />
            {children}
        </div>
    );
}


export default DashboardLayout;