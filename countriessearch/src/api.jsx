import axios from "axios";
const BACKEND_ENPOINT="https://restcountries.com/v3.1/all";

// export const countryFlags =async()=>{
//     try{
//         const res= await axios.get(BACKEND_ENPOINT);
//         return res.data;
//     }
//     catch(error){
//         console.log(error);
//         console.error(error);
//         return null;
//     }
    
// }

export const countryFlags = async () => {
    const response = await axios.get(BACKEND_ENPOINT);
    return response.data;
};