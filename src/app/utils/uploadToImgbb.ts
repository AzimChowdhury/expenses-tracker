export const uploadToImgBB = async ({ selectedFile }: any) => {
  if (selectedFile) {
    try {
      console.log(2);
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log("uploading . . . ");
      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
      const data = await response.json();
      console.log("Image uploaded successfully:", data.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
};
