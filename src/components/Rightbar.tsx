import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useGetTopExpensiveCategory } from '@/app/utils/useGetTopExpensiveCategory';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const Rightbar = () => {

    const categorizeExpenses = useGetTopExpensiveCategory()

    return (
        <div id='rightbar' className="bg-[#F9FAFC] w-2/6 h-full rounded-2xl overflow-y-hidden ">
            <div className="py-14  pr-8 ps-14">
                <p className="text-xl font-semibold mb-10">where your money go?</p>
                <div className=''>

                    {
                        categorizeExpenses && categorizeExpenses?.map(categorizeExpense => (
                            <div key={categorizeExpense?.category} className='pb-8'>
                                <div className='flex justify-between items-center pb-3 font-[500]'>
                                    <p>{categorizeExpense?.category}</p>
                                    <p>$ {categorizeExpense?.totalExpense}</p>
                                </div>
                                <p> <BorderLinearProgress variant="determinate" value={Math.round(categorizeExpense?.percentage)} /></p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Rightbar;