import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    );
}


export default DashboardLayout;