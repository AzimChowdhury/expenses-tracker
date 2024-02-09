'use client'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Image from 'next/image';
import Rightbar from './Rightbar';
import { useEffect, useState } from 'react';
import CategoryDialog from './CategoryDialog';
import { useGetTopExpensiveCategory } from '@/app/utils/useGetTopExpensiveCategory';

type categoryType = {
    _id: string,
    name: string,
    image: string,
    date: string,
    user: string,
}

const Category = () => {
    const [categories, setCategories] = useState<categoryType[]>([])
    const [createCategoryModal, setCreateCategoryModal] = useState(false);

    const topCategories = useGetTopExpensiveCategory()

    useEffect(() => {
        fetch('/api/category')
            .then((res) => res.json())
            .then((data) => setCategories(data?.data))
            .catch((err) => console.error(err));
    }, [createCategoryModal, categories]);



    return (
        <div className="bg-white w-full rounded-2xl flex justify-between">
            <div className="lg:w-4/6 w-full py-14 lg:px-20 px-12">
                {/*    Category Heading  */}
                <div className='flex justify-between items-center'>
                    <p className="text-4xl font-semibold">Category</p>
                    <p onClick={() => setCreateCategoryModal(!createCategoryModal)} className='text-lg font-semibold  text-[#32A7E2] cursor-pointer'>Add Category  <AddCircleOutlineIcon /></p>
                </div>

                {/* Your Categories */}
                <div className='pt-10'>
                    <p className='text-lg font-semibold'>Your Categories</p>

                    {
                        categories && categories?.map((category: categoryType) => (
                            <div key={category?._id} className='flex justify-between items-center mt-4'>
                                <div className='flex items-center'>
                                    <Image className='rounded-full' src={category?.image} alt='' width={50} height={50} />
                                    <p className='pl-4 font-[500] text-lg'>{category?.name}</p>
                                </div>
                                <p className='text-[#A8A8A8]'>Created at {category?.date}</p>
                            </div>
                        ))

                    }

                </div>


                {/* top expenses */}
                <div className='pt-10'>
                    <p className='text-lg font-semibold'>Top Expenses By Category</p>

                    {
                        topCategories && topCategories?.map((category, index) => (
                            <div key={category?.category} className='flex justify-between items-center mt-4'>
                                <div className='flex items-center'>
                                    <p className='text-2xl font-bold rounded-3xl border-2 border-gray-500 py-2 px-4 text-gray-500'>{index + 1}</p>
                                    <p className='pl-4 font-[600] text-lg'>{category?.category}</p>
                                </div>
                                <p className='font-semibold'>- $ {category?.totalExpense}</p>
                            </div>
                        ))

                    }

                </div>
            </div>


            <Rightbar />

            <CategoryDialog
                createCategoryModal={createCategoryModal}
                setCreateCategoryModal={setCreateCategoryModal}
            />
        </div>
    );
};

export default Category;