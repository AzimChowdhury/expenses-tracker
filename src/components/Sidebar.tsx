import Image from 'next/image';
import './sidebar.css';
import { FC } from 'react';

interface SidebarProps {
    handleChange: (newValue: number) => void;
    value: number;
}


const Sidebar: FC<SidebarProps> = ({ handleChange, value }) => {
    return (
        <div className="text-white w-60 pl-3 pt-12">
            <div>
                <Image className='rounded-lg mb-3' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt={''} width={60} height={50} />
                <p className='text-xl font-semibold '>Bruno</p>
                <p className='text-sm'>bruno@email.com</p>
            </div>


            <div>
                <p
                    onClick={() => handleChange(0)}
                    className={`text-lg font-bold mt-10 mb-2 cursor-pointer 
                    ${value == 0 ? 'underline underline-offset-4' : ''}`}
                >
                    Expenses
                </p>
                <p
                    onClick={() => handleChange(1)}
                    className={`text-lg font-bold cursor-pointer 
                    ${value == 1 ? 'underline underline-offset-4' : ''}`}
                >
                    Category
                </p>
            </div>
        </div>
    )
}

export default Sidebar;