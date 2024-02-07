
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
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [imgBBUrl, setImgBBUrl] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setSelectedFile(file);


            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
            console.log(1);
            if (selectedFile) {

                uploadToImgBB(selectedFile)
            }

        }
    };


    const handleTextFieldChange = (event: any) => {
        setName(event.target.value);
    }

    const handleCreateCategory = () => {
        setError('')
        if (name === '') {
            setError('Name is required');
        }
        if (imgBBUrl === '') {
            setError('Image is required');
        }
        const date = getCurrentDate()

        const data = {
            name: name, img: imgBBUrl, date: date
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
                        <div className='pt-5'>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Category Name"
                                    onChange={handleTextFieldChange}
                                />
                            </Box>
                        </div>
                        <p className='pt-5'>
                            <input type="file" accept="image/jpeg, image/png" onChange={handleFileInputChange} />
                        </p>
                        {previewUrl && (
                            <Image src={previewUrl} alt="Preview" style={{ maxWidth: '200%' }} width={200} height={200} className='mt-3 border-2 border-gray-400 rounded' />

                        )}

                        {
                            error && <p className='text-red-600 pt-5'>{error}</p>
                        }

                        <p className='pt-5'>
                            <Button onClick={handleCreateCategory} fullWidth variant="contained">
                                Create
                            </Button>
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CategoryDialog;