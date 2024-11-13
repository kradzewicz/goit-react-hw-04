import axios from "axios";

export const fetchImages = async (searchQuery, page ) => {
    const resp = await axios.get(`https://api.unsplash.com/search/photos?client_id=t0-KJCUbGjsajxmPSjWYbd2Om-UXgiIChW_AF6SvCrY&page=${page}&query=${searchQuery}`)
    return resp.data
}