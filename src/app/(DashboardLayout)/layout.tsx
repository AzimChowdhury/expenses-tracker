'use client'
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Category from "@/components/Category";
import Expenses from "@/components/Expenses";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [drawerState, setDrawerState] = useState<boolean>(false)
    const [value, setValue] = useState<number>(0);

    const handleChange = (newValue: number) => {
        setValue(newValue);

    };



    return (
        <div className=" relative  min-w-screen min-h-screen bg-[#32A7E2] p-7 flex">

            <Sidebar handleChange={handleChange} value={value} />

            <Button className="absolute top-0 left-0" onClick={() => setDrawerState(!drawerState)}>{'left'}</Button>
            {/* small device sidebar */}
            <Drawer
                anchor={"left"}
                open={drawerState}
            >
                hello
                <Button onClick={() => setDrawerState(!drawerState)}>{'left'}</Button>
            </Drawer>

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