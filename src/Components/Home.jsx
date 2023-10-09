import { Button } from "bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import OurOffer from "./OurOffer";
import SeviceList from "./SeviceList";


const Home = () => {


    const data = useLoaderData()
    const services = data.sports_data
    console.log(services)
  
    return (

        <div>
           <Banner></Banner>
        <OurOffer></OurOffer>
        <h1 className="mx-auto text-4xl font-medium text-center">Our event services category</h1>

          <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 my-7">
          {
                services.map(service => <SeviceList key={service.id} service={service}></SeviceList>)
            }
          </div>
           <Footer></Footer>

        </div>
    );
};

export default Home;