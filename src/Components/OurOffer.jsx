import { Link } from "react-router-dom";

const OurOffer = () => {
    return (
        <div>
            <h1  className="text-center text-3xl my-3 text-cyan-500">What we offer </h1>
            <h1 className="text-center text-3xl font-medium">Come & join in our free services and become Extraordinary</h1>

           <div className="grid md:grid-cols-2 mx-auto lg:grid-cols-4 gap-5 my-5 mx-3">
           <div className="card w-72 bg-base-100 my-6 shadow-xl">
              <figure><img className="rounded-full" src="https://i.ibb.co/G5gf01N/images-6.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title mx-auto">
                  Event <Link className="link link-accent" to="/login">Sign Up</Link> or <Link className="link link-accent" to="/register">Register</Link>                 
                </h2>
                <p className="mx-auto">It takes 5 minitues to join</p>               
              </div>
            </div>


            <div className="card w-72 bg-base-100 my-6 shadow-xl">
              <figure><img className="rounded-full bg-gray-700" src="https://i.ibb.co/4N1rprw/img7.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title text-center mx-auto">
                 Competetion                
                </h2>
                <p className="text-center mx-auto">Take part in competetion</p>               
              </div>
            </div>

            <div className="card w-72 bg-base-100 my-6 shadow-xl">
              <figure><img className="rounded-full bg-gray-700" src="https://i.ibb.co/JthL02p/images8.png" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title text-center mx-auto">
                 Specials                
                </h2>
                <p className="text-center mx-auto">Individuals Bonuses</p>               
              </div>
            </div>

            <div className="card w-72 bg-base-100 my-6 shadow-xl">
              <figure><img className="rounded-full bg-gray-700" src="https://i.ibb.co/LdMH5st/img9.png" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title text-center mx-auto">
                 Lesson for All ages                
                </h2>
                <p className="text-center mx-auto">We have the best coaches</p>               
              </div>
            </div>
           </div>
        </div>
    );
};

export default OurOffer;