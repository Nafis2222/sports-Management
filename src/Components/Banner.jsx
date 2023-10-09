import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
                    
                    <div className="carousel mx-2 w-full">
              <div id="slide1" className="carousel-item relative  w-full h-96">
              <img src="https://i.ibb.co/HdGT1Kc/images-1.jpg" className="lg:w-full opacity-40" /> 
              <h1 class="absolute top-9 left-12 lg:left-80 text-4xl md:text-6xl font-bold text-sky-900">
                <h1 className="text-sky-500">Big Shout for the Sportsmans ||</h1>SPORTS EVENT!!!<br></br><span className="text-orange-600">Loading(10 nov)</span><br/>Are you ready ?</h1>
          {/* <p class="absolute text-white ali  text-xl font-medium mx-[460px] justify-items-center top-64">We supply highly quality organic products</p> */}
          
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                  
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full h-96">
                <img src="https://i.ibb.co/KwmMqFc/images-2.jpg" className="w-full opacity-40" />
                <h1 class="absolute top-20 left-20 lg:left-80 text-4xl md:text-6xl font-bold text-sky-900">Don't miss the chance,<br></br><span className="text-white">Challenge Yourself</span><br/>And started to roar</h1>1>
          
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full h-96">
              <h1 class="absolute top-12 left-20 lg:left-80 text-4xl md:text-6xl font-bold text-sky-900">We ensure the 100% service,<br></br><span className="text-accent">for the competators</span><br/>And make skillfull competators</h1>
                <img src="https://i.ibb.co/98vXDjC/images-3.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide4" className="carousel-item relative w-full h-96">
                <img src="https://i.ibb.co/Ht49wBY/image-4.jpg" className="w-full" />
                <h1 class="absolute top-12 left-20 lg:left-80 text-4xl md:text-6xl font-bold text-sky-900">For enjoying our 100% scholarship facility click,<br></br><span className="text-blue-800"> on the register button</span><br/><Link to="/register"><button className="btn btn-accent">Register</button></Link></h1>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Banner;