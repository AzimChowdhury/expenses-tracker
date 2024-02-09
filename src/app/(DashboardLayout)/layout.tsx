'use client'
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Category from "@/components/Category";
import Expenses from "@/components/Expenses";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SmSidebar from "@/components/SmSidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [drawerState, setDrawerState] = useState<boolean>(false)
    const [value, setValue] = useState<number>(0);
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "loading") {
        return <div className="flex justify-center mt-48">
            <CircularProgress />
        </div>
    }

    if (status === "unauthenticated") {
        router.push('/')
    }

    const handleChange = (newValue: number) => {
        setValue(newValue);

    };



    return (
        <div>

            <p id="smSidebar" className='absolute top-5 left-[-5px]  z-10 text-white
             bg-[#32A7E2] border-white border-2 px-[2px] py-2 rounded'
                onClick={() => setDrawerState(!drawerState)}>
                <ArrowForwardIosIcon />
            </p>

            <div className="min-w-screen min-h-screen bg-[#32A7E2] p-7 flex">

                <Sidebar handleChange={handleChange} value={value} />


                {/* small device sidebar */}
                <SmSidebar drawerState={drawerState} handleChange={handleChange} setDrawerState={setDrawerState} value={value} />

                {
                    value === 1 && <Category />
                }
                {
                    value === 0 && <Expenses />
                }
            </div>
            <ToastContainer />
        </div>
    );
}


export default DashboardLayout;