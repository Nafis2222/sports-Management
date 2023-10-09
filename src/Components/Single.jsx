import { Link } from "react-router-dom";

const Single = ({detailCard}) => {
    const {id,event,bgColor,coach,textColor,date,buttonBgColor,description} = detailCard
    console.log(detailCard.event)
    return (
        <div>
<div className="card w-80  glass mx-auto my-3" style={{backgroundColor: bgColor }}>
  <figure><img src={event.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{event.name}</h2>
    <p>{description}</p>
    <Link to="/"><button className="btn btn-accent w-full">Go Back </button></Link>
   
  </div>
</div>       </div>
    );
};

export default Single;


