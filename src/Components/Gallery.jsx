import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div>
            <h1 className="text-3xl font-medium text-center text-accent my-5">Hey Guys!!! Just see our practice session image and pick up your decision</h1>
            <h1 className="text-3xl font-medium text-center text-orange-600 my-5">Extraordinary something is waiting for you ||!</h1>
            <div className="grid  md:grid-cols-3 lg:grid-cols-4 mb-3 mx-auto gap-2">
                <img className="w-72 mb-2 mx-auto h-48" src="https://i.ibb.co/kMK65RB/gal1.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48" src="https://i.ibb.co/ZHXt5hJ/gal2.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48" src="https://i.ibb.co/wBHKS2z/gal3.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48" src="https://i.ibb.co/xmhhRbZ/gal4.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48" src="https://i.ibb.co/X7fX6gH/gal5.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48" src="https://i.ibb.co/PMBJhFQ/gal6.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48" src="https://i.ibb.co/8NbTpGX/gal7.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48" src="https://i.ibb.co/pvqWfGm/gal8.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48"  src="https://i.ibb.co/3ywJFGr/gal9.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48"  src="https://i.ibb.co/DzPdF2Z/gal10.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48"  src="https://i.ibb.co/vHvY5C0/gal11.jpg" alt="" />
                <img className="w-72 mb-2 mx-auto h-48"  src="https://i.ibb.co/GcHxrj6/gal12.jpg" alt="" />

                
            </div>
            <Link to="/" className="justify-end text-center ml-[150px] md:ml-[300px] lg:ml-[550px]"><button className="btn mx-auto justify-center btn-neutral hover:bg-cyan-500">Go Back</button></Link>
        </div>
    );
};

export default Gallery;