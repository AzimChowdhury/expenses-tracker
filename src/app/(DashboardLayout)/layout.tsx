'use client'
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Category from "@/components/Category";
import Expenses from "@/components/Expenses";

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (newValue: number) => {
        setValue(newValue);

    };



    return (
        <div className="dashboard   min-w-screen min-h-screen bg-[#32A7E2] p-7 flex">
            <Sidebar handleChange={handleChange} value={value} />

            {
                value === 1 && <Category />
            }
            {
                value === 0 && <Expenses />
            }
        </div>
    );
}


export default DashboardLayout;