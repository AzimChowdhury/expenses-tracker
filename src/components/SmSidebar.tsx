import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { Paper } from '@mui/material';


const SmSidebar = ({ drawerState, setDrawerState, handleChange, value }: any) => {
    return (
        <div >
            <Drawer
                anchor={"left"}
                open={drawerState}
            >

                <Paper style={{ backgroundColor: "#32A7E2", height: '100%' }}>
                    <Button style={{ color: 'white', marginLeft: "190px", marginTop: "15px" }} onClick={() => setDrawerState(!drawerState)}><HighlightOffIcon /></Button>


                    <div className="text-white w-64 pl-8 pt-8">
                        <div>
                            <Image className='rounded-lg mb-3' src={'https://i.ibb.co/RbGMStw/1694309765616.jpg'} alt={''} width={70} height={70} />
                            <p className='text-2xl font-semibold '>Bruno</p>
                            <p className=''>bruno@email.com</p>
                        </div>


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
                </Paper>

            </Drawer>
        </div>
    );
};

export default SmSidebar;