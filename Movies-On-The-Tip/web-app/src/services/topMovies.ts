import axios from "axios";
import iMovies from "../models/iMovies";

const baseUrl=process.env.REACT_APP_BASE_URL;



const getMovies=async () => {
    const response = await axios.get<iMovies[]>(`${baseUrl}/top-rated-movies`)
    return response.data;   
}

export {getMovies};