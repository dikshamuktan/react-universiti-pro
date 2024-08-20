import axios from "axios";
import { useEffect,useState } from "react";
import { json, useParams } from "react-router-dom";


const DetailsPage= ()=> {
    const {id}= useParams();
    const [country, setCountry]=useState([]);

    useEffect(()=> {
        const getCountry= async()=>{
            try{
                const req= await axios.get(`http://universities.hipolabs.com/search?country_name/${id}`)
                setCountry(req.data)
            }catch(err){
                console.log(err)
            }
        }
        getCountry();
    },[id]);



    return(
      <div>
        {JSON.stringify(country)}
      </div>
    )
}

export default DetailsPage;