import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

//photo API
 export async function fetchPhotos(query,page=1,per_page=20){
 const res = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
 });
 return res.data
}

//video API
 export async function fetchVideos(query,per_page=20){
 const res = await axios.get('https://api.pexels.com/videos/search',{
    params:{query,per_page},
    headers:{Authorization:`Client-ID ${PEXELS_KEY}`}
 });
 return res.data
}