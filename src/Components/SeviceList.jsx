import { Link } from "react-router-dom";

const SeviceList = ({service}) => {
    const {id,event,bgColor,coach,textColor,date,buttonBgColor,description} = service
    console.log(service)
    return (
        <div>
            <div className="card w-80  glass mx-auto my-3" style={{backgroundColor: bgColor }}>
              <figure ><img className="w-80 h-48" src={event.image} alt="car!"/></figure>
              <div className="">
                <div className="flex justify-between mx-1"><h2 className="card-title text-white">{event.name}</h2>
                <p className="text-end" style={{color: buttonBgColor}}>Coming soon <br/> {date}</p></div>
                <div className="flex gap-4 mx-2">
                    <img className="w-16 h-16 rounded-full" src={coach.image} alt="" />
                    <h1 className="mt-5 text-lg" style={{color: textColor}}>Coach: {coach.name}</h1>
                </div>
                {
                     description.length >100 ?
                     <p className="my-3 mx-1 text-slate-950">{description.slice(0,150)}<br/><Link to={`/event/${id}`} className="link mx-2 link-primary"><button className="btn btn-primary mr-4 w-full">Read More</button></Link></p>
                     : <p>{description}</p>
                }
              </div>
            </div>        
        </div>
    );
};

export default SeviceList;