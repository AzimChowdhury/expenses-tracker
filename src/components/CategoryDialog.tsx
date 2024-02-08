
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { uploadToImgBB } from '@/app/utils/uploadToImgbb';
import { getCurrentDate } from '@/app/utils/getCurrentDate';



const CategoryDialog = ({ createCategoryModal, setCreateCategoryModal }: any) => {
    const [previewUrl, setPreviewUrl] = useState("");
    const [error, setError] = useState('')

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



    const handleCreateCategory = async (event: any) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.files[0];
        setError('');

        if (!name) {
            setError('Name is required');
            return;
        }

        if (!image) {
            setError('Image is required');
            return;
        }

        try {
            const imgBBData = await uploadToImgBB(image);
            const imgBBUrl = imgBBData.data.url;

            const date = getCurrentDate();

            const data = {
                name: name, img: imgBBUrl, date: date
            };

            console.log(data);
        } catch (error: any) {
            console.error('Error uploading image to ImgBB:', error.message);
            setError('Failed to upload image');
        }
    }


    return (
        <div>
            <Dialog
                open={createCategoryModal}
                onClose={() => setCreateCategoryModal(false)}
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
                            onClick={() => setCreateCategoryModal(!createCategoryModal)}
                        ><CloseIcon /></p>
                        <p className='text-3xl font-bold'>Create Category</p>
                        <form onSubmit={handleCreateCategory}>
                            <div className='pt-5'>
                                <p className='font-semibold'>Category Name</p>
                                <input type="text" name='name' required className='w-full border-2 border-gray-400 rounded-lg p-2 mt-2' />
                            </div>
                            <div className='pt-3'>
                                < p className='pb-2 font-semibold'>Category Image</p>
                                <input name='image' type="file" accept="image/jpeg, image/png" onChange={handleFileInputChange} />
                            </div>
                            {previewUrl && (
                                <Image src={previewUrl} alt="Preview" style={{ maxWidth: '200%' }} width={200} height={200} className='mt-3 border-2 border-gray-400 rounded' />

                            )}

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

export default CategoryDialog;