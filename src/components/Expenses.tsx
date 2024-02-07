/* eslint-disable react/no-unescaped-entities */
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Image from 'next/image';
import Rightbar from './Rightbar';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const Expenses = () => {
    return (
        <div className="bg-white w-full rounded-2xl relative">
            <div className="w-4/6  py-14 px-20">
                {/*    Expenses Heading  */}
                <div className='flex justify-between items-center'>
                    <p className="text-4xl font-semibold">Expenses</p>
                    <p className='text-lg font-semibold  text-[#32A7E2] cursor-pointer'>Add Expenses  <AddCircleOutlineIcon /></p>
                </div>

                {/* Top Expenses */}
                <div className='pt-10'>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg font-semibold'>Top Expenses</p>
                        <FormControl >
                            <NativeSelect
                                disableUnderline
                                defaultValue={1 - 24}
                                IconComponent={KeyboardArrowDownIcon}
                                sx={{
                                    color: "#32A7E2",
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    "& svg": {
                                        color: "#32A7E2"
                                    }
                                }}

                            >
                                <option value={1 - 24} >Jan 2024</option>
                                <option value={12 - 23} >Dec 2023</option>
                                <option value={11 - 23} >Nov 2023</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <div>
                                <p className='pl-4 font-[600] text-lg'>Paid rent for Feb</p>
                                <p className=' pl-4 text-[#A8A8A8]'>5:12 pm .  <LoyaltyIcon /> Rent</p>
                            </div>
                        </div>
                        <p className='font-[600]'>- 1,85,750</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <div>
                                <p className='pl-4 font-[600] text-lg'>Paid rent for Feb</p>
                                <p className=' pl-4 text-[#A8A8A8]'>5:12 pm .  <LoyaltyIcon /> Rent</p>
                            </div>
                        </div>
                        <p className='font-[600]'>- 1,85,750</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <div>
                                <p className='pl-4 font-[600] text-lg'>Paid rent for Feb</p>
                                <p className=' pl-4 text-[#A8A8A8]'>5:12 pm .  <LoyaltyIcon /> Rent</p>
                            </div>
                        </div>
                        <p className='font-[600]'>- 1,85,750</p>
                    </div>
                </div>


                {/* top expenses */}
                <div className='pt-10'>
                    <p className='text-lg font-semibold'>Today's Expenses</p>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <div>
                                <p className='pl-4 font-[600] text-lg'>Paid rent for Feb</p>
                                <p className=' pl-4 text-[#A8A8A8]'>5:12 pm .  <LoyaltyIcon /> Rent</p>
                            </div>
                        </div>
                        <p className='font-[600]'>- 1,85,750</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <div>
                                <p className='pl-4 font-[600] text-lg'>Paid rent for Feb</p>
                                <p className=' pl-4 text-[#A8A8A8]'>5:12 pm .  <LoyaltyIcon /> Rent</p>
                            </div>
                        </div>
                        <p className='font-[600]'>- 1,85,750</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <Image className='rounded-full' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt='' width={50} height={50} />
                            <div>
                                <p className='pl-4 font-[600] text-lg'>Paid rent for Feb</p>
                                <p className=' pl-4 text-[#A8A8A8]'>5:12 pm .  <LoyaltyIcon /> Rent</p>
                            </div>
                        </div>
                        <p className='font-[600]'>- 1,85,750</p>
                    </div>
                </div>
            </div>


            <Rightbar />
        </div>
    );
};

export default Expenses;