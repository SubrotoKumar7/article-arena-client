import axios from "axios"

const uploadImage = async(image) => {
    const formData = new FormData();
    formData.append('image', image);

    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_kEY}`, formData);
    return res.data;
}

export default uploadImage;