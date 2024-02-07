import Image from 'next/image';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="text-white w-60 pl-3 pt-12">
            <div>
                <Image className='rounded-lg mb-3' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt={''} width={60} height={50} />
                <p className='text-xl font-semibold '>Bruno</p>
                <p className='text-sm'>bruno@email.com</p>
            </div>


            <div>
                <p className='text-lg font-bold mt-10 mb-2'>Expenses</p>
                <p className='text-lg font-bold '>Category</p>
            </div>
        </div>
    )
}

export default Sidebar;