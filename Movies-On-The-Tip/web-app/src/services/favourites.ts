import axios from "axios";
import iMovies from "../models/iMovies";

const baseUrl=process.env.REACT_APP_BASE_URL;



const getMovies=async () => {
    const response = await axios.get<iMovies[]>(`${baseUrl}/favourit`)
    return response.data;   
}
const addMovie=async(movie:iMovies)=>{
    const response=await axios.post<iMovies>(`${baseUrl}/favourit`,movie,{
        headers:{
            'Content-Type':'application/json'
        }
    });
    return response.data;
};
const removeMovie=async(movie:iMovies)=>{
    const response=await axios.delete<iMovies>(`${baseUrl}/favourit/${movie.id}`,{
        headers:{
            'Content-Type':'application/json'
        }
    });
    return response.data;
};
export {getMovies,addMovie,removeMovie};