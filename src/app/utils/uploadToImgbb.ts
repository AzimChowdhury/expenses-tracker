export const uploadToImgBB = async (img: string | Blob) => {
  const form = new FormData();
  form.append("image", img);

  const url = `${process.env.NEXT_PUBLIC_IMGBB_API}?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;

  const config = {
    method: "POST",
    body: form,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    return data;
  } catch (error: any) {
    console.error("Error uploading image to ImgBB:", error.message);
    throw new Error("Failed to upload image to ImgBB");
  }
};
