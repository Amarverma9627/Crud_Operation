import axios from "axios";
import { useEffect, useState } from "react";


export let useApi=(API_URL)=>{
    let [dbData,setDbData] =useState(null);

    async function getApiData(url) {
        try {
                    let response=await axios.get(url);
                    setDbData(response.data);
                } catch (error) {
                    console.log("Error while fetching ");
                    
                }         
    }
    useEffect(()=>{
        getApiData(API_URL);
    },[]);
    return dbData;
}