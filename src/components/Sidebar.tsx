import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FC } from 'react';

interface SidebarProps {
    handleChange: (newValue: number) => void;
    value: number;
}

interface User {
    image: string;
    name: string;
    email: string;
}

const Sidebar: FC<SidebarProps> = ({ handleChange, value }) => {
    const { data: session } = useSession()

    return (
        <div id='lgSidebar' className="text-white w-64 pl-4 pt-12">
            {
                session?.user?.image && <div>
                    <Image className='rounded-lg mb-3' src={session.user.image} alt={''} width={70} height={70} />
                    <p className='text-2xl font-semibold '>{session?.user?.name}</p>
                    <p className=''>{session?.user?.email}</p>
                </div>
            }


            <div>
                <p
                    onClick={() => handleChange(0)}
                    className={`text-xl font-bold mt-12 mb-4 cursor-pointer 
                    ${value == 0 ? 'underline underline-offset-4' : ''}`}
                >
                    Expenses
                </p>
                <p
                    onClick={() => handleChange(1)}
                    className={`text-xl font-bold cursor-pointer 
                    ${value == 1 ? 'underline underline-offset-4' : ''}`}
                >
                    Category
                </p>
            </div>
        </div>
    )
}

export default Sidebar;