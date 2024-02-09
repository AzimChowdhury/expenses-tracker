/* eslint-disable react/no-unescaped-entities */
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Image from 'next/image';
import Rightbar from './Rightbar';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ExpenseDialog from './ExpenseDialog';
import { useEffect, useState } from 'react';
import { getCurrentDate } from '@/app/utils/getCurrentDate';
import { useGetTopExpensiveCategory } from '@/app/utils/useGetTopExpensiveCategory';



export type expenseType = {
    _id: string,
    name: string,
    image: string,
    date: string,
    time: string,
    user: string,
    expense: number,
    category: string
}



const Expenses = () => {
    const [expenses, setExpenses] = useState<expenseType[]>([])
    const [createExpenseModal, setCreateExpenseModal] = useState(false);
    const today = getCurrentDate()

    useEffect(() => {
        fetch('/api/expense')
            .then((res) => res.json())
            .then((data) => setExpenses(data?.data))
            .catch((err) => console.error(err));
    }, [createExpenseModal, expenses]);




    return (
        <div className="bg-white w-full rounded-2xl relative ">
            <div className="w-4/6  py-14 px-20">
                {/*    Expenses Heading  */}
                <div className='flex justify-between items-center'>
                    <p className="text-4xl font-semibold">Expenses</p>
                    <p onClick={() => setCreateExpenseModal(!createExpenseModal)} className='text-lg font-semibold  text-[#32A7E2] cursor-pointer'>Add Expenses  <AddCircleOutlineIcon /></p>
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

                    {
                        expenses?.map((expense: expenseType) => (
                            <div key={expense?._id} className='flex justify-between items-center mt-4'>
                                <div className='flex items-center'>
                                    <Image className='rounded-full' src={expense?.image} alt='' width={50} height={50} />
                                    <div>
                                        <p className='pl-4 font-[600] text-lg'>{expense?.name}</p>
                                        <p className=' pl-4 text-[#A8A8A8]'> {expense.date} - {expense?.time}   .   <LoyaltyIcon /> {expense?.category}</p>
                                    </div>
                                </div>
                                <p className='font-[600]'>- $ {expense?.expense}</p>
                            </div>
                        ))
                    }

                </div>


                {/* top expenses */}
                <div className='pt-10'>
                    <p className='text-lg font-semibold'>Today's Expenses</p>
                    {
                        expenses?.filter(expense => expense?.date === today)?.map((expense: expenseType) => (
                            <div key={expense?._id} className='flex justify-between items-center mt-4'>
                                <div className='flex items-center'>
                                    <Image className='rounded-full' src={expense?.image} alt='' width={50} height={50} />
                                    <div>
                                        <p className='pl-4 font-[600] text-lg'>{expense?.name}</p>
                                        <p className=' pl-4 text-[#A8A8A8]'> {expense.date} - {expense?.time}   .   <LoyaltyIcon /> {expense?.category}</p>
                                    </div>
                                </div>
                                <p className='font-[600]'>- $ {expense?.expense}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


            <Rightbar />
            <ExpenseDialog
                createExpenseModal={createExpenseModal}
                setCreateExpenseModal={setCreateExpenseModal}
            />
        </div>
    );
};

export default Expenses;