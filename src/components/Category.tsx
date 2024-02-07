import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Image from 'next/image';

const Category = () => {
    return (
        <div className="bg-white w-full rounded-2xl">
            <div className="w-4/6  py-14 px-20">
                {/*    Category Heading  */}
                <div className='flex justify-between items-center'>
                    <p className="text-4xl font-semibold">Category</p>
                    <p className='text-lg font-semibold  text-[#32A7E2] cursor-pointer'>Add Category  <AddCircleOutlineIcon /></p>
                </div>

                {/* Your Categories */}
                <div className='pt-10'>
                    <p className='text-lg font-semibold'>Your Categories</p>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <p className='pl-4 font-[500] text-lg'>Transportation</p>
                        </div>
                        <p className='text-[#A8A8A8]'>Created at 12/12/2023</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <p className='pl-4 font-[500] text-lg'>Transportation</p>
                        </div>
                        <p className='text-[#A8A8A8]'>Created at 12/12/2023</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <p className='pl-4 font-[500] text-lg'>Transportation</p>
                        </div>
                        <p className='text-[#A8A8A8]'>Created at 12/12/2023</p>
                    </div>
                </div>


                {/* top expenses */}
                <div className='pt-10'>
                    <p className='text-lg font-semibold'>Top Expenses By Category</p>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <p className='pl-4 font-[500] text-lg'>Transportation</p>
                        </div>
                        <p className='text-[#A8A8A8]'>Created at 12/12/2023</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <p className='pl-4 font-[500] text-lg'>Transportation</p>
                        </div>
                        <p className='text-[#A8A8A8]'>Created at 12/12/2023</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <p className='pl-4 font-[500] text-lg'>Transportation</p>
                        </div>
                        <p className='text-[#A8A8A8]'>Created at 12/12/2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;