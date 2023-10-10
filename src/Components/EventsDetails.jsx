import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Single from "./Single";

const EventsDetails = () => {
    const [detailCard, setCard] = useState({})
     const anarray = [];
    const {id} = useParams()
    const idInt = parseFloat(id)
console.log(idInt)
    const details = useLoaderData()
    const fulldetails = details.sports_data
    useEffect(()=>{
        const findDetail = fulldetails ?.find(detail => detail.id === idInt)
        setCard(findDetail)
        
    },[id,details])

    console.log(detailCard)
    return (
        <div>
            
            <Single  detailCard={detailCard}></Single>
        </div>
    );
};

export default EventsDetails;