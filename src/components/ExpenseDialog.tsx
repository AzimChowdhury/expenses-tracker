
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { uploadToImgBB } from '@/app/utils/uploadToImgbb';
import { getCurrentDate } from '@/app/utils/getCurrentDate';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import { getCurrentTime } from '@/app/utils/getCurrentTime';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { toast } from 'react-toastify';

type categoryType = {
    _id: string,
    name: string,
    image: string,
    date: string,
    user: string,
}


const ExpenseDialog = ({ createExpenseModal, setCreateExpenseModal }: any) => {
    const [previewUrl, setPreviewUrl] = useState("");
    const [error, setError] = useState('')
    const [categories, setCategories] = useState<categoryType[]>([])
    const [category, setCategory] = useState('')
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        fetch('/api/category')
            .then((res) => res.json())
            .then((data) => setCategories(data?.data))
            .catch((err) => console.error(err));
    }, []);


    if (status === "loading") {
        return <div className="flex justify-center mt-48">
            <CircularProgress />
        </div>
    }

    if (status === "unauthenticated") {
        router.push('/')
    }


    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);

        }
    };

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };


    const handleCreateExpense = async (event: any) => {
        setError('');
        event.preventDefault();
        const name = event.target.name.value;
        const expense = event.target.expense.value;
        const image = event.target.image.files[0];
        setError('Loading . . . Please Wait...');
        if (!name) {
            setError('Name is required');
            return;
        }

        if (!image) {
            setError('Image is required');
            return;
        }

        if (!expense) {
            setError('Expense must bigger than 0');
            return;
        }

        try {
            const imgBBData = await uploadToImgBB(image);
            const imgBBUrl = imgBBData.data.url;
            if (!imgBBUrl) {
                setError('Failed to upload image');
                return;
            }
            const date = getCurrentDate();
            const time = getCurrentTime();

            if (session?.user?.email) {
                const data = {
                    name: name, image: imgBBUrl, date: date, time: time, user: session.user.email, expense: expense, category: category
                };


                fetch('/api/expense', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast.success("Expense created successfully")
                            setCreateExpenseModal(!createExpenseModal)
                            setPreviewUrl('');
                        } else {
                            toast.error("Fail to create expense")
                            setCreateExpenseModal(!createExpenseModal)
                            setPreviewUrl('');
                        }
                    })
                    .catch(err => {
                        toast.error("Fail to create expense")
                        setCreateExpenseModal(!createExpenseModal)
                        setPreviewUrl('');
                    });

            }


        } catch (error: any) {
            console.error('Error uploading image to ImgBB:', error.message);
            setError('Failed to upload image');
        }
    }


    return (
        <div>
            <Dialog
                open={createExpenseModal}
                onClose={() => setCreateExpenseModal(false)}
                sx={{
                    '& .MuiDialog-paper': {
                        width: '35%',
                    },
                }}
            >
                <DialogContent>
                    <div className='p-6'>
                        <p
                            className='absolute top-10 right-10 cursor-pointer'
                            onClick={() => setCreateExpenseModal(!createExpenseModal)}
                        ><CloseIcon /></p>
                        <p className='text-3xl font-bold'>Create Expense</p>
                        <form onSubmit={handleCreateExpense}>
                            <div className='pt-5'>
                                <p className='font-semibold'>Expense Name</p>
                                <input type="text" name='name' required className='w-full border-2 border-gray-400 rounded-lg p-2 mt-2' />
                            </div>
                            <div className='pt-3'>
                                < p className='pb-2 font-semibold'>Expense Image</p>
                                <input name='image' type="file" accept="image/jpeg, image/png" onChange={handleFileInputChange} />
                            </div>
                            {previewUrl && (
                                <Image src={previewUrl} alt="Preview" style={{ maxWidth: '200%' }} width={200} height={200} className='mt-3 border-2 border-gray-400 rounded' />

                            )}
                            <div className='pt-5'>
                                <p className='font-semibold'>Total Expense ($)</p>
                                <input type="number" name='expense' required className='w-full border-2 border-gray-400 rounded-lg p-2 mt-2' />
                            </div>

                            <div className='pt-5'>
                                <p className='font-semibold'>Select the expense category</p>
                                <Select
                                    fullWidth={true}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    onChange={handleChange}
                                    sx={{ marginTop: 1 }}
                                >
                                    {
                                        categories?.map(category => (
                                            <MenuItem key={category?._id} value={category?.name}>{category?.name}</MenuItem>
                                        ))
                                    }

                                </Select>
                            </div>

                            {
                                error && <p className='text-red-600 pt-5'>{error}</p>
                            }

                            <p className='pt-5'>
                                <Button type='submit' fullWidth variant="contained">
                                    Create
                                </Button>
                            </p>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ExpenseDialog;