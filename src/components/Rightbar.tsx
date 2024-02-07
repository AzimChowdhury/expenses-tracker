import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

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
    return (
        <div id='rightbar' className="absolute top-0 right-0 bg-[#F9FAFC] w-2/6 h-full rounded-2xl ">
            <div className="py-14  pr-8 ps-14">
                <p className="text-xl font-semibold mb-10">where your money go?</p>

                <div className='pb-8'>
                    <div className='flex justify-between items-center pb-3 font-[500]'>
                        <p>Food and Drinks</p>
                        <p>8,35,500</p>
                    </div>
                    <p> <BorderLinearProgress variant="determinate" value={80} /></p>
                </div>
                <div className='pb-8'>
                    <div className='flex justify-between items-center pb-3 font-[500]'>
                        <p>Food and Drinks</p>
                        <p>15,54,561</p>
                    </div>
                    <p> <BorderLinearProgress variant="determinate" value={80} /></p>
                </div>
                <div className='pb-8'>
                    <div className='flex justify-between items-center pb-3 font-[500]'>
                        <p>Food and Drinks</p>
                        <p>15,54,561</p>
                    </div>
                    <p> <BorderLinearProgress variant="determinate" value={80} /></p>
                </div>
                <div className='pb-8'>
                    <div className='flex justify-between items-center pb-3 font-[500]'>
                        <p>Food and Drinks</p>
                        <p>15,54,561</p>
                    </div>
                    <p> <BorderLinearProgress variant="determinate" value={80} /></p>
                </div>
                <div className='pb-8'>
                    <div className='flex justify-between items-center pb-3 font-[500]'>
                        <p>Food and Drinks</p>
                        <p>15,54,561</p>
                    </div>
                    <p> <BorderLinearProgress variant="determinate" value={80} /></p>
                </div>

            </div>
        </div>
    );
};

export default Rightbar;